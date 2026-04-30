import { CtaPrimary, CtaWhatsapp } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
import {
  Award,
  BookOpen,
  Check,
  ClipboardCheck,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

const includedCards = [
  {
    icon: GraduationCap,
    accent: "bg-pink",
    title: "Pós-Graduação em RT & Consultoria de Alimentos",
    items: [
      "10 módulos completos",
      "360 horas de carga horária",
      "18 meses de acesso",
      "Certificado pela Faculdade Unypública (MEC · Portaria nº 615/2021)",
      "Aula mensal ao vivo do Método",
      "Grupo de Vagas no WhatsApp",
      "Grupo de Networking no WhatsApp",
      "Grupo de Estudos de Caso no WhatsApp",
      "Suporte acadêmico em dias úteis via e-mail",
      "300+ templates e materiais validados",
    ],
  },
  {
    icon: BookOpen,
    accent: "bg-orange",
    title: "Food Smart Pro (Vitalício)",
    items: [
      "11+ cursos livres com certificado",
      "RT Class: aulas mensais com especialistas",
      "Comunidade Food Smart no Facebook",
      "Acesso vitalício a todos os cursos atuais e futuros",
      "Atualizações de legislação incluídas",
    ],
  },
  {
    icon: ClipboardCheck,
    accent: "bg-sky",
    title: "VerificaSmart",
    items: [
      "3 meses de acesso gratuito ao app",
      "Checklists de verificação e auditoria",
      "Gestão completa de RT e Consultoria",
    ],
  },
];

const valueRows = [
  ["Pós-Graduação (Método Smart)", "R$ 5.997"],
  ["Aulas ao vivo + WhatsApp + Suporte", "R$ 2.200"],
  ["300+ materiais de apoio", "R$ 2.000"],
  ["Certificado MEC", "Inestimável"],
  ["Food Smart Pro (todos os cursos)", "R$ 13.000"],
  ["RT Class (aulas técnicas)", "R$ 3.000"],
  ["Comunidade Vitalícia", "Inestimável"],
  ["VerificaSmart 3 meses", "R$ 270"],
  ["Troféu de Reconhecimento", "Inestimável"],
];

const bonusCards = [
  {
    label: "1º comprador",
    badge: "🥇 Mais raro",
    accent: "from-yellow to-orange",
    ring: "ring-yellow",
    items: ["Mentoria Individual", "1 Ingresso para evento presencial", "Mentoria em Grupo"],
    highlight: true,
  },
  {
    label: "Top 3 primeiros",
    badge: "🥈 Edição limitada",
    accent: "from-pink to-orange",
    ring: "ring-pink",
    items: ["Mentoria em Grupo", "Livro físico Paula Eloize"],
  },
  {
    label: "Top 5 primeiros",
    badge: "🥉 Vagas finais",
    accent: "from-sky to-navy",
    ring: "ring-sky",
    items: ["Mentoria em Grupo"],
  },
];

const TESTIMONIAL_VIDEO_ID = "HRUY7_KS7pI";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      {/* 1. HERO */}
      <section className="confetti-bg bg-gradient-hero text-white">
        <div className="container-narrow relative z-10 py-20 md:py-32 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs md:text-sm font-medium backdrop-blur">
              <Sparkles className="h-4 w-4 text-yellow" />
              Oferta exclusiva · Apenas durante a campanha
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Quem faz aniversário <span className="text-yellow">somos nós.</span>
              <br />
              Quem ganha o presente <span className="text-yellow">é você.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-8 max-w-3xl text-base md:text-xl leading-relaxed text-white/85">
              Pela primeira vez na história da Food Smart, todo o ecossistema —{" "}
              <strong className="text-white">Pós-Graduação, Food Smart Pro e VerificaSmart</strong> — está reunido em um único combo com{" "}
              <strong className="text-white">acesso vitalício</strong>. Por <span className="font-bold text-yellow">84% menos</span>.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <CtaPrimary />
              <p className="text-sm text-white/80">
                <strong className="text-white">R$ 5.997 à vista</strong> ou 12× R$ 499,75 sem juros
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. O QUE ESTÁ INCLUSO */}
      <section className="section-pad bg-white">
        <div className="container-narrow">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-center font-display text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Tudo que foi construído em <span className="text-pink">8 anos</span> — reunido num único lugar
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {includedCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={idx * 120}>
                  <article className="group h-full rounded-3xl border border-border bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${card.accent} text-white shadow-lg`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold text-navy leading-snug">{card.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {card.items.map((it) => (
                        <li key={it} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-14 flex justify-center">
              <CtaPrimary>Quero garantir meu Combo Aniversário</CtaPrimary>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. GARANTIA */}
      <section className="section-pad bg-white">
        <div className="container-narrow">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border-2 border-yellow/60 bg-gradient-to-br from-yellow/5 to-orange/5 p-10 md:p-14 text-center shadow-card">
              <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-yellow shadow-glow animate-pulse-soft">
                <ShieldCheck className="h-10 w-10 text-navy" />
              </div>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-extrabold text-navy">
                7 dias de garantia incondicional
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                Se por qualquer motivo você não ficar satisfeita, basta nos contatar em até 7 dias após a compra e devolvemos{" "}
                <strong className="text-navy">100% do seu investimento</strong>. Sem burocracia, sem perguntas.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-medium text-navy">
                <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" />suporte@foodsmart.com.br</span>
                <span className="hidden sm:inline text-muted-foreground">·</span>
                <span>WhatsApp (41) 99899-0331</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. CERTIFICAÇÃO */}
      <section className="section-pad bg-gradient-navy text-white">
        <div className="container-narrow">
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <Reveal>
              <div className="mx-auto inline-flex h-28 w-28 items-center justify-center rounded-3xl bg-white/10 ring-4 ring-yellow/40 backdrop-blur">
                <Award className="h-14 w-14 text-yellow" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight">
                  Certificado reconhecido <span className="text-yellow">pelo MEC</span>
                </h2>
                <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed">
                  A Pós-Graduação em RT &amp; Consultoria de Alimentos é certificada pela{" "}
                  <strong className="text-white">Faculdade Unypública</strong> — instituição credenciada pelo Ministério da Educação conforme{" "}
                  <strong className="text-white">Portaria nº 615/2021</strong>. Um certificado de especialista que você pode apresentar com autoridade no mercado.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. ANCORAGEM DE VALOR */}
      <section className="section-pad bg-white">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-center font-display text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              O que tudo isso valeria <span className="text-pink">separado?</span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-border shadow-card">
              <table className="w-full text-left">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-4 font-display text-sm md:text-base font-semibold">Item</th>
                    <th className="px-5 py-4 text-right font-display text-sm md:text-base font-semibold">Valor individual</th>
                  </tr>
                </thead>
                <tbody>
                  {valueRows.map(([item, val], i) => (
                    <tr key={item} className={i % 2 ? "bg-muted/40" : "bg-white"}>
                      <td className="px-5 py-4 text-sm md:text-base text-navy">{item}</td>
                      <td className="px-5 py-4 text-right text-sm md:text-base font-semibold text-muted-foreground">{val}</td>
                    </tr>
                  ))}
                  <tr className="bg-gradient-festive text-white">
                    <td className="px-5 py-5 font-display text-lg md:text-xl font-extrabold uppercase tracking-wide">TOTAL</td>
                    <td className="px-5 py-5 text-right font-display text-2xl md:text-3xl font-extrabold">R$ 37.725+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-gradient-navy p-8 md:p-12 text-center text-white shadow-glow">
              <p className="font-display text-lg md:text-xl uppercase tracking-wider text-white/70">No Combo Aniversário</p>
              <p className="mt-3 font-display text-4xl md:text-6xl font-extrabold text-yellow">R$ 5.997 à vista</p>
              <p className="mt-2 text-white/80">ou 12× R$ 499,75 sem juros</p>
              <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-pink px-6 py-3 font-display text-base md:text-lg font-bold">
                Você economiza R$ 31.728 — 84% OFF
              </div>
              <div className="mt-8">
                <CtaPrimary />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. BÔNUS DE ESCASSEZ */}
      <section className="section-pad bg-gradient-navy text-white">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-center font-display text-3xl md:text-5xl font-extrabold leading-tight">
              Bônus exclusivos para os <span className="text-yellow">primeiros</span> a garantir o Combo
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3 items-stretch">
            {bonusCards.map((b, idx) => (
              <Reveal key={b.label} delay={idx * 150}>
                <article
                  className={`relative h-full rounded-3xl bg-white p-8 text-navy shadow-card transition-all hover:-translate-y-1 ${
                    b.highlight ? "ring-4 ring-yellow scale-100 md:scale-105 shadow-glow" : "opacity-95"
                  }`}
                >
                  {b.highlight && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-pink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                      O mais cobiçado
                    </span>
                  )}
                  <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${b.accent} px-4 py-1.5 text-sm font-semibold text-white`}>
                    <Trophy className="h-4 w-4" />
                    {b.label}
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{b.badge}</p>
                  <ul className="mt-6 space-y-3">
                    {b.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm md:text-base font-medium">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-pink" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <p className="mt-10 text-center text-white/85">
              Os bônus são <strong className="text-yellow">cumulativos</strong> e válidos apenas durante a live do dia <strong className="text-yellow">05/05</strong>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. FRASE DE IMPACTO */}
      <section className="bg-navy-deep py-20 md:py-28 text-white">
        <div className="container-narrow">
          <Reveal>
            <p className="mx-auto max-w-4xl text-center font-display text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Em um único mês de faturamento como RT, você já paga o combo inteiro.{" "}
              <span className="text-yellow">Depois disso, o resto da vida é lucro</span> — com acesso vitalício.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. A HISTÓRIA */}
      <section className="section-pad bg-white">
        <div className="container-narrow max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              8 anos atrás, uma <span className="text-pink">veterinária endividada</span> decidiu que tinha que existir outro caminho.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>Paula começou sozinha, num quarto de kitnet, devendo o cartão e o carro.</p>
              <p>Bateu na porta até ela se abrir. Criou um método. Validou com a própria vida.</p>
              <p>
                Hoje, mais de <strong className="text-navy">4.000 profissionais</strong> vivem esse caminho — faturando de R$ 10k a R$ 40k por mês,
                almoçando em casa, sem plantões.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-10 border-l-4 border-pink pl-6 font-display text-xl md:text-2xl font-bold text-navy leading-snug">
              Quem construiu essa história foram vocês.
              <br />
              E quem merece o maior presente também são vocês.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9. CASES REAIS */}
      <section className="section-pad bg-muted/40">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-center font-display text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Não é exceção. <span className="text-pink">É o que acontece quando o método é certo.</span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="mx-auto mt-12 max-w-4xl">
              <div className="aspect-video overflow-hidden rounded-3xl shadow-glow ring-1 ring-navy/10 bg-navy">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${TESTIMONIAL_VIDEO_ID}`}
                  title="Depoimento de aluna Food Smart"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground italic">
                Depoimento real de aluna Food Smart
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. ALUNOS FOOD SMART */}
      <section className="section-pad" style={{ backgroundColor: "hsl(var(--sky))" }}>
        <div className="container-narrow text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-navy leading-tight">
              Você já é aluno Food Smart?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-navy/85 leading-relaxed">
              Temos condições exclusivas para quem já faz parte da nossa comunidade. Fala com a gente e descobre como aproveitar essa oferta de aniversário.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8">
              <CtaWhatsapp>Quero saber as condições exclusivas</CtaWhatsapp>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section className="confetti-bg bg-gradient-hero text-white">
        <div className="container-narrow relative z-10 py-20 md:py-32 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
              Uma decisão <span className="text-yellow">muda tudo.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-lg md:text-2xl text-white/85">
              O caro não é o investimento. <strong className="text-white">O caro é ficar de fora.</strong>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mx-auto mt-10 inline-block rounded-3xl border border-white/15 bg-white/5 px-8 py-6 backdrop-blur">
              <p className="text-white/70 line-through">De R$ 37.725</p>
              <p className="mt-1 font-display text-4xl md:text-6xl font-extrabold text-yellow">por R$ 5.997 à vista</p>
              <p className="mt-2 text-white/80">ou 12× R$ 499,75 sem juros</p>
            </div>
          </Reveal>

          <Reveal delay={450}>
            <div className="mt-10">
              <CtaPrimary />
            </div>
          </Reveal>

          <Reveal delay={600}>
            <p className="mx-auto mt-8 max-w-xl text-sm text-white/75">
              ⚠️ Oferta disponível apenas durante a campanha. O acesso vitalício não estará disponível fora desse período.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep py-12 text-white/80">
        <div className="container-narrow">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-display text-2xl font-extrabold text-white">
              Food <span className="text-yellow">Smart</span>
            </p>
            <p className="text-sm">© 2026 Food Smart. Todos os direitos reservados.</p>
            <p className="text-xs text-white/60">CNPJ 37.976.335/0001-50</p>
            <p className="inline-flex items-center gap-2 text-xs text-white/60">
              <MapPin className="h-3.5 w-3.5" />
              Rua Deputado Estefano Mikilita, 125, Sala 1003, Curitiba/PR
            </p>
            <p className="inline-flex items-center gap-2 text-xs text-white/60">
              <Mail className="h-3.5 w-3.5" />
              suporte@foodsmart.com.br
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
