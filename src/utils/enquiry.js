import { companyInfo } from '../data/company.js';
import { getWhatsAppLink } from './whatsapp.js';

const WEB3FORMS_SUBMIT_URL = 'https://api.web3forms.com/submit';
const REQUEST_TIMEOUT_MS = 12000;

const PLACEHOLDER_TOKENS = [
  'YOUR_FORM_ID',
  'YOUR_WEB3FORMS_ACCESS_KEY',
  'YOUR_APPS_SCRIPT_WEB_APP_URL'
];

const cleanEnvValue = (value) => {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (PLACEHOLDER_TOKENS.some((token) => trimmed.includes(token))) return '';
  return trimmed;
};

/**
 * Builds a pre-filled WhatsApp URL containing the user's enquiry details
 * for zero-cost fallback when network or form endpoint is unavailable.
 */
export const buildEnquiryWhatsAppUrl = (formData = {}) => {
  const lines = [
    `Hello ${companyInfo.name || 'ChemSeva Chemicals'}, I would like to submit a business enquiry:`,
    formData.name ? `Name: ${formData.name.trim()}` : null,
    formData.company ? `Company: ${formData.company.trim()}` : null,
    formData.mobile ? `Mobile: ${formData.mobile.trim()}` : null,
    formData.email ? `Email: ${formData.email.trim()}` : null,
    formData.product ? `Product: ${formData.product.trim()}` : null,
    formData.message ? `Requirement: ${formData.message.trim()}` : null
  ].filter(Boolean);

  return getWhatsAppLink(lines.join('\n'));
};

export const validateEnquiryForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Please enter your full name';
  }

  if (!formData.company || formData.company.trim().length < 2) {
    errors.company = 'Please enter your company name';
  }

  const normalizedMobile = (formData.mobile || '').replace(/[\s-]/g, '');
  if (!normalizedMobile || !/^(?:\+91)?[6-9]\d{9}$/.test(normalizedMobile)) {
    errors.mobile = 'Please enter a valid 10-digit Indian mobile number';
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Please enter a message (at least 10 characters)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

const getEnv = (key) => {
  const env = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {};
  return cleanEnvValue(env[key]);
};

const logToGoogleSheets = async (payload) => {
  const sheetsUrl = getEnv('VITE_GOOGLE_SHEETS_WEBHOOK_URL');
  if (!sheetsUrl) return;

  try {
    // Google Apps Script Web Apps reject CORS preflight for application/json;
    // text/plain with no-cors delivers JSON in e.postData.contents reliably.
    await fetch(sheetsUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });
  } catch {
    // Non-blocking CRM logging: do not fail the enquiry if sheet logging errors.
  }
};

const resolveBackendConfig = () => {
  const web3formsKey = getEnv('VITE_WEB3FORMS_ACCESS_KEY');
  const envEndpoint = getEnv('VITE_FORM_ENDPOINT');
  const companyEndpoint = cleanEnvValue(companyInfo.formspreeEndpoint);

  if (web3formsKey) {
    return {
      provider: 'web3forms',
      endpoint: envEndpoint || WEB3FORMS_SUBMIT_URL,
      accessKey: web3formsKey
    };
  }

  const endpoint = envEndpoint || companyEndpoint;
  if (endpoint) {
    return {
      provider: 'endpoint',
      endpoint,
      accessKey: ''
    };
  }

  return null;
};

export const submitEnquiry = async (formData) => {
  const whatsappUrl = buildEnquiryWhatsAppUrl(formData);

  // Honeypot spam check: silently succeed without hitting any backend quota
  if (formData.botcheck && formData.botcheck.trim().length > 0) {
    return {
      success: true,
      isSpam: true,
      message: 'Thank you for your enquiry! We will get back to you shortly.',
      whatsappUrl
    };
  }

  const backend = resolveBackendConfig();
  if (!backend) {
    return {
      success: false,
      code: 'NOT_CONFIGURED',
      whatsappUrl,
      message:
        'Contact form backend is not configured yet. Please send your enquiry directly via WhatsApp or email.'
    };
  }

  const sanitizedLead = {
    name: formData.name.trim(),
    company: formData.company.trim(),
    mobile: formData.mobile.trim(),
    email: formData.email.trim(),
    product: (formData.product || '').trim() || 'General Enquiry',
    message: formData.message.trim()
  };

  const requestBody =
    backend.provider === 'web3forms'
      ? {
          access_key: backend.accessKey,
          subject: `New B2B Enquiry: ${sanitizedLead.product} — ${sanitizedLead.company}`,
          from_name: `${companyInfo.name} Website`,
          replyto: sanitizedLead.email,
          botcheck: '',
          ...sanitizedLead
        }
      : sanitizedLead;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(backend.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    let data = null;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    const isProviderSuccess =
      response.ok && (data === null || data.success !== false);

    if (isProviderSuccess) {
      void logToGoogleSheets({
        ...sanitizedLead,
        submittedAt: new Date().toISOString(),
        source: typeof window !== 'undefined' ? window.location.pathname : '/'
      });

      return {
        success: true,
        message: 'Thank you for your enquiry! Our technical sales team will get back to you shortly.',
        whatsappUrl
      };
    }

    return {
      success: false,
      code: 'PROVIDER_ERROR',
      whatsappUrl,
      message:
        (data && data.message) ||
        'Unable to submit your enquiry right now. Please try again or continue directly on WhatsApp.'
    };
  } catch (error) {
    clearTimeout(timeoutId);
    const isTimeout = error && error.name === 'AbortError';

    return {
      success: false,
      code: isTimeout ? 'TIMEOUT' : 'NETWORK_ERROR',
      whatsappUrl,
      message: isTimeout
        ? 'The request timed out due to a slow connection. You can send your pre-filled enquiry immediately via WhatsApp.'
        : 'Network error while sending your enquiry. You can send your pre-filled enquiry immediately via WhatsApp.'
    };
  }
};
