# Aumentar foto da Paula na seção "Conheça sua mentora!"

## O que será feito

Em `src/pages/Index.tsx`, na seção "Conheça sua mentora!" (linhas ~375-384):

- Aumentar a escala da imagem no desktop de `md:scale-110` para `md:scale-125 lg:scale-[1.35]`, fazendo a foto ficar visivelmente maior em proporção ao texto.
- Ancorar a transformação em `md:origin-left` para que o crescimento aconteça a partir da borda esquerda, sem invadir/colidir com a coluna de texto.
- (Opcional, leve) Manter o grid em duas colunas iguais para preservar o equilíbrio entre foto e texto.

No mobile, nada muda — a imagem segue ocupando 100% da largura como hoje.

## Trecho final esperado

```tsx
<div className="flex justify-center md:justify-start">
  <img
    src={paulaEloizeMentora}
    alt="Paula Eloize — Médica Veterinária e criadora do Método Smart"
    className="w-full max-w-2xl md:scale-125 lg:scale-[1.35] h-auto object-contain mx-auto md:origin-left"
    loading="lazy"
  />
</div>
```

## O que NÃO muda

- Foto do hero permanece exatamente como está.
- Texto, ordem e estrutura da seção continuam idênticos.
- Comportamento mobile da seção permanece igual.
