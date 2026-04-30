const CHECKOUT_URL = "#checkout";
const WHATSAPP_URL = "https://wa.me/5541998990331?text=Ol%C3%A1!%20Sou%20aluno%20Food%20Smart%20e%20quero%20saber%20as%20condi%C3%A7%C3%B5es%20exclusivas%20do%20Combo%20Anivers%C3%A1rio.";

export const CtaPrimary = ({ children = "Quero garantir meu Combo Aniversário", className = "" }: { children?: React.ReactNode; className?: string }) => (
  <a href={CHECKOUT_URL} className={`cta-yellow ${className}`}>
    {children}
    <span aria-hidden>→</span>
  </a>
);

export const CtaWhatsapp = ({ children }: { children: React.ReactNode }) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 font-display font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep"
  >
    {children}
    <span aria-hidden>→</span>
  </a>
);

export { CHECKOUT_URL, WHATSAPP_URL };
