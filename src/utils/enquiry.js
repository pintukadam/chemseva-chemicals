import { companyInfo } from '../data/company';

export const validateEnquiryForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Please enter your full name';
  }

  if (!formData.company || formData.company.trim().length < 2) {
    errors.company = 'Please enter your company name';
  }

  if (!formData.mobile || !/^[6-9]\d{9}$/.test(formData.mobile.replace(/\s/g, ''))) {
    errors.mobile = 'Please enter a valid 10-digit mobile number';
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
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

export const submitEnquiry = async (formData) => {
  const endpoint = companyInfo.formspreeEndpoint;

  if (!endpoint || endpoint.includes('YOUR_FORM_ID')) {
    return {
      success: false,
      message: 'Contact form is not configured yet. Please reach out via WhatsApp or email directly.'
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Thank you for your enquiry! We will get back to you shortly.'
      };
    } else {
      return {
        success: false,
        message: 'Something went wrong. Please try again or contact us directly.'
      };
    }
  } catch (error) {
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
};
