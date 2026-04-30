# Plano — Vídeo de depoimento na seção de provas sociais

## Objetivo
Remover os 4 cards de cases (Carla, Gabi, Agatha, Aluna com bebê) e a headline da seção 9 do `Index.tsx`, substituindo por **um único vídeo do YouTube** posicionado logo abaixo da headline existente, mantendo o bloco final de cálculo ("5 clientes × R$ 2.000…").

## O que muda em `src/pages/Index.tsx` (seção 9 — CASES REAIS)

**Manter:**
- Background `bg-muted/40` e padding da seção
- Headline: *"Não é exceção. É o que acontece quando o método é certo."*
- Bloco final de fechamento com gradiente navy ("5 clientes × R$ 2.000 = R$ 10.000/mês…")

**Remover:**
- Array `cases` (no topo do arquivo)
- Grid `grid md:grid-cols-2` com os 4 `<article>` de depoimentos

**Adicionar no lugar do grid:**
- Um wrapper centralizado (`max-w-4xl mx-auto`) com `aspect-video` contendo um `<iframe>` do YouTube
- Estilização: bordas arredondadas (`rounded-3xl`), `shadow-glow`, `overflow-hidden`, `ring` sutil para destaque
- Envolto em `<Reveal>` para manter a animação de entrada consistente com o resto da página
- Atributos do iframe: `title`, `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"`, `allowFullScreen`, `loading="lazy"`
- Pequena legenda opcional abaixo do vídeo (ex.: *"Depoimento real de aluna Food Smart"*) em texto discreto

## Placeholder do link
Como você ainda não enviou o URL, vou deixar uma constante no topo do arquivo:

```tsx
const TESTIMONIAL_VIDEO_ID = "VIDEO_ID_AQUI"; // substituir pelo ID do YouTube
```

E o iframe usará `https://www.youtube.com/embed/${TESTIMONIAL_VIDEO_ID}`. Basta você me passar o link depois (ou trocar manualmente o ID — é a parte após `v=` ou `youtu.be/`).

## Notas técnicas
- Sem dependências novas — iframe nativo
- `aspect-video` (16:9) garante responsividade sem quebra de layout
- `loading="lazy"` evita custo de carregamento até o usuário rolar até a seção
- A ordem visual da seção fica: **Headline → Vídeo → Card de fechamento "R$ 10.000/mês"**
