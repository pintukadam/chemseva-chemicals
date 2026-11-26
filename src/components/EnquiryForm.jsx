import React, { useState, useEffect, useId } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import {
  validateEnquiryForm,
  submitEnquiry,
  buildEnquiryWhatsAppUrl
} from '../utils/enquiry';

const getInitialFormState = (prefilledProduct = '') => ({
  name: '',
  company: '',
  mobile: '',
  email: '',
  product: prefilledProduct || '',
  message: prefilledProduct
    ? `I am interested in receiving a quote and technical datasheet for ${prefilledProduct}.`
    : '',
  botcheck: ''
});

export default function EnquiryForm({ prefilledProduct = '' }) {
  const formId = useId();
  const [formData, setFormData] = useState(() => getInitialFormState(prefilledProduct));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '', whatsappUrl: '' });

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        product: prefilledProduct,
        message:
          prev.message ||
          `I am interested in receiving a quote and technical datasheet for ${prefilledProduct}.`
      }));
    }
  }, [prefilledProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateEnquiryForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setStatus({ state: 'submitting', message: '', whatsappUrl: '' });

    const result = await submitEnquiry(formData);

    if (result.success) {
      setStatus({ state: 'success', message: result.message, whatsappUrl: '' });
      setFormData(getInitialFormState(''));
      setErrors({});
    } else {
      setStatus({
        state: 'error',
        message: result.message,
        whatsappUrl: result.whatsappUrl || buildEnquiryWhatsAppUrl(formData)
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-lg">
      <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-navy mb-2">
        Send a Business Enquiry
      </h3>
      <p className="text-xs sm:text-sm text-gray-500 mb-6">
        Fill out this form and our technical sales team will review your requirements.
      </p>

      {status.state === 'success' && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 p-4 rounded-2xl bg-teal/10 border border-teal/30 text-teal flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs font-semibold">
            <p className="font-bold text-sm">Enquiry Sent Successfully!</p>
            <p className="mt-1 text-gray-600 font-normal">{status.message}</p>
          </div>
        </div>
      )}

      {status.state === 'error' && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col gap-2"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" aria-hidden="true" />
            <div className="text-xs">
              <p className="font-bold text-sm text-amber-800">Could Not Send Online</p>
              <p className="mt-1 text-amber-700">{status.message}</p>
            </div>
          </div>
          <div className="pl-8 pt-1">
            <a
              href={status.whatsappUrl || buildEnquiryWhatsAppUrl(formData)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal text-white text-xs font-semibold hover:bg-teal-dark transition-colors"
            >
              Send via WhatsApp &rarr;
            </a>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Honeypot field for spam bots (zero-cost bot protection) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${formId}-botcheck`}>Leave this field empty</label>
          <input
            id={`${formId}-botcheck`}
            type="text"
            name="botcheck"
            value={formData.botcheck}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name and Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${formId}-name`} className="block text-xs font-bold text-gray-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id={`${formId}-name`}
              type="text"
              name="name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Patel"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${formId}-name-error` : undefined}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                errors.name ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.name && (
              <p id={`${formId}-name-error`} className="text-[11px] text-red-500 mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${formId}-company`} className="block text-xs font-bold text-gray-700 mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id={`${formId}-company`}
              type="text"
              name="company"
              required
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Acme Textiles Ltd."
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? `${formId}-company-error` : undefined}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                errors.company ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.company && (
              <p id={`${formId}-company-error`} className="text-[11px] text-red-500 mt-1">
                {errors.company}
              </p>
            )}
          </div>
        </div>

        {/* Mobile and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${formId}-mobile`} className="block text-xs font-bold text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              id={`${formId}-mobile`}
              type="tel"
              name="mobile"
              required
              autoComplete="tel"
              inputMode="tel"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              aria-invalid={Boolean(errors.mobile)}
              aria-describedby={errors.mobile ? `${formId}-mobile-error` : undefined}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                errors.mobile ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.mobile && (
              <p id={`${formId}-mobile-error`} className="text-[11px] text-red-500 mt-1">
                {errors.mobile}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${formId}-email`} className="block text-xs font-bold text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id={`${formId}-email`}
              type="email"
              name="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. purchase@company.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${formId}-email-error` : undefined}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                errors.email ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.email && (
              <p id={`${formId}-email-error`} className="text-[11px] text-red-500 mt-1">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Product Interested In */}
        <div>
          <label htmlFor={`${formId}-product`} className="block text-xs font-bold text-gray-700 mb-1">
            Product Interested In
          </label>
          <input
            id={`${formId}-product`}
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="e.g. Silicone Defoamer 20%, Wax Emulsion, etc."
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary text-xs focus:outline-none transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor={`${formId}-message`} className="block text-xs font-bold text-gray-700 mb-1">
            Requirement Details / Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please specify application, required volume, delivery location, or test sample requests..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${formId}-message-error` : undefined}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
              errors.message ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
            }`}
          />
          {errors.message && (
            <p id={`${formId}-message-error`} className="text-[11px] text-red-500 mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.state === 'submitting'}
          className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
        >
          {status.state === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>Transmitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Submit Commercial Enquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
