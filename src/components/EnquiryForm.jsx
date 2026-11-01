import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { validateEnquiryForm, submitEnquiry } from '../utils/enquiry';
import { categories } from '../data/products';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function EnquiryForm({ prefilledProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    mobile: '',
    email: '',
    product: prefilledProduct || '',
    message: prefilledProduct ? `I am interested in receiving a quote and technical datasheet for ${prefilledProduct}.` : ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle, submitting, success, error

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

    setStatus({ state: 'submitting', message: '' });

    const result = await submitEnquiry(formData);

    if (result.success) {
      setStatus({ state: 'success', message: result.message });
      setFormData({
        name: '',
        company: '',
        mobile: '',
        email: '',
        product: '',
        message: ''
      });
      setErrors({});
    } else {
      setStatus({ state: 'error', message: result.message });
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
        <div className="mb-6 p-4 rounded-2xl bg-teal/10 border border-teal/30 text-teal flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs font-semibold">
            <p className="font-bold text-sm">Enquiry Sent Successfully!</p>
            <p className="mt-1 text-gray-600 font-normal">{status.message}</p>
          </div>
        </div>
      )}

      {status.state === 'error' && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col gap-2">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
            <div className="text-xs">
              <p className="font-bold text-sm text-amber-800">Notice</p>
              <p className="mt-1 text-amber-700">{status.message}</p>
            </div>
          </div>
          <div className="pl-8 pt-1">
            <a
              href={getWhatsAppLink(`Hi ChemSeva, I am enquiring about ${formData.product || 'chemical products'}. My name is ${formData.name || ''} from ${formData.company || ''}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal text-white text-xs font-semibold hover:bg-teal-dark transition-colors"
            >
              Continue on WhatsApp &rarr;
            </a>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name and Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Patel"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                errors.name ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Acme Textiles Ltd."
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                errors.company ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.company && <p className="text-[11px] text-red-500 mt-1">{errors.company}</p>}
          </div>
        </div>

        {/* Mobile and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                errors.mobile ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.mobile && <p className="text-[11px] text-red-500 mt-1">{errors.mobile}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. purchase@company.com"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                errors.email ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Product Interested In */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Product Interested In
          </label>
          <input
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
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Requirement Details / Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please specify application, required volume, delivery location, or test sample requests..."
            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
              errors.message ? 'border-red-400 focus:border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
            }`}
          />
          {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.state === 'submitting'}
          className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
        >
          {status.state === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Commercial Enquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
