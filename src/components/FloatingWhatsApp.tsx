import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=5541995896140&text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Combo%20Vital%C3%ADcio%20do%20Maio%20Smart";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-110 animate-pulse-soft md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-7 w-7 fill-current" strokeWidth={0} />
    </a>
  );
};
