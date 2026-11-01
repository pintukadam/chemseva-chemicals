import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function WhatsAppFloat() {
  const whatsappUrl = getWhatsAppLink('Hello ChemSeva Chemicals, I would like to enquire about your industrial chemical products.');

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline font-medium">WhatsApp Enquiry</span>
    </a>
  );
}
