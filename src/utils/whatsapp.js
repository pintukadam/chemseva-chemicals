import { companyInfo } from '../data/company.js';

export const generateWhatsAppLink = (message = '') => {
  const phone = companyInfo.whatsapp.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message || 'Hello, I would like to inquire about your chemical products.');
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const getWhatsAppLink = generateWhatsAppLink;

export const generateProductEnquiryLink = (productName) => {
  const message = `Hello, I am interested in ${productName}. Please provide more details including pricing and availability.`;
  return generateWhatsAppLink(message);
};

export const getProductWhatsAppLink = generateProductEnquiryLink;

export const generateQuoteRequestLink = (productName) => {
  const message = `Hello, I would like to request a quote for ${productName}. Please share the pricing details.`;
  return generateWhatsAppLink(message);
};
