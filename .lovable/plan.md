# Trocar foto da Paula na seção "Conheça sua mentora!"

## O que será feito

1. Salvar a nova foto enviada como `src/assets/paula-eloize-mentora.png` (arquivo separado, sem sobrescrever a foto do hero).
2. Em `src/pages/Index.tsx`:
   - Adicionar o import: `import paulaEloizeMentora from "@/assets/paula-eloize-mentora.png";`
   - Na seção "Conheça sua mentora!" (item 8 — A HISTÓRIA), trocar o `src={paulaEloize}` do `<img>` por `src={paulaEloizeMentora}`.
3. Manter a foto do hero (seção 1) exatamente como está, ainda usando `paula-eloize.png`.

## O que NÃO muda

- Foto do hero permanece intacta.
- Layout, dimensões, classes e textos da seção "Conheça sua mentora!" continuam iguais — apenas a imagem de origem é trocada.
- Nenhuma outra seção é afetada.
