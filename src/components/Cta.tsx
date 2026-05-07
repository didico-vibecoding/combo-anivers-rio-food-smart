import { useEffect, useState } from "react";

const CHECKOUT_BASE = "https://pay.onprofit.com.br/WB0eHK3K?off=YzGmIe&mode=aTOcO0ac&sck=5997-tmkt";
const WHATSAPP_URL = "https://wa.me/5541998990331?text=Ol%C3%A1!%20Sou%20aluno%20Food%20Smart%20e%20quero%20saber%20as%20condi%C3%A7%C3%B5es%20exclusivas%20do%20Combo%20Anivers%C3%A1rio.";

const useCheckoutUrl = () => {
  const [url, setUrl] = useState(CHECKOUT_BASE);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    const utmParams = new URLSearchParams();

    utmKeys.forEach((key) => {
      if (params.has(key)) utmParams.set(key, params.get(key)!);
    });

    if (utmParams.toString()) {
      setUrl(`${CHECKOUT_BASE}&${utmParams.toString()}`);
    }
  }, []);

  return url;
};

export const CtaPrimary = ({ children = "Quero garantir meu Combo Aniversário", className = "" }: { children?: React.ReactNode; className?: string }) => {
  const checkoutUrl = useCheckoutUrl();
  return (
    <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className={`cta-yellow ${className}`}>
      <span className="text-center">
        {children} <span aria-hidden>→</span>
      </span>
    </a>
  );
};

export const CtaWhatsapp = ({ children }: { children: React.ReactNode }) => (
  
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 font-display font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep"
  >
    {children}
    <span aria-hidden>→</span>
  </a>
);

export { CHECKOUT_BASE as CHECKOUT_URL, WHATSAPP_URL };
