export const WHATSAPP_NUMBER = "5491173643037";

export const getWhatsAppUrl = (text: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
