# Adicionar CTA abaixo da foto da mentora (desktop)

## O que será feito

Em `src/pages/Index.tsx`, na coluna da imagem da seção "Conheça sua mentora!":

- Transformar o wrapper da imagem em uma coluna flex (`flex flex-col`) para empilhar imagem + botão.
- Logo abaixo do `<img>`, adicionar `<CtaPrimary>Quero garantir meu Combo Aniversário</CtaPrimary>` envolto em um `<div className="hidden md:block w-full">` — o botão aparece apenas no desktop, sem alterar a versão mobile.
- Remover qualquer margem extra entre a imagem e o botão (`mb-0` na img) para que o botão fique "colado" no fim da foto, dando a sensação de continuidade visual.
- Trocar a origem da escala para `md:origin-bottom-left`, fazendo o aumento crescer a partir do canto inferior esquerdo — assim a base da foto continua alinhada ao topo do botão.

## URL

O componente `CtaPrimary` já aponta para a mesma URL de checkout (`CHECKOUT_URL`) usada nos demais botões — nenhuma configuração adicional necessária.

## O que NÃO muda

- Mobile: nenhuma alteração visual — o botão extra fica oculto por `hidden md:block`.
- Texto, layout e foto do hero permanecem exatamente como estão.
- Demais seções, intactas.
