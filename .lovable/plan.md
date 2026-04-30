## Objetivo
Restaurar as logos originais (como você enviou) e deixar as 3 com tamanho visual idêntico nos cards.

## Passos

### 1. Restaurar as logos originais
Sobrescrever os PNGs em `src/assets/` recopiando dos uploads originais:
- `user-uploads://logo_posgraduacao.png` → `src/assets/logo-posgraduacao.png`
- `user-uploads://logo_foodsmartpro.png` → `src/assets/logo-foodsmart-pro.png`
- `user-uploads://logo_verificasmart.png` → `src/assets/logo-verificasmart.png`

### 2. Normalizar o tamanho visual (recortar margens brancas)
O motivo da Food Smart Pro parecer menor é que o PNG original tem **muito espaço em branco ao redor** do desenho (quase 596px de altura para um logo de ~214px). Já a Pós-Graduação ocupa quase toda a área do PNG.

Solução: rodar um script Python que **recorta as margens brancas** de cada PNG (mantendo apenas o desenho) — sem alterar cores nem desenho:
- Detectar pixels brancos (R,G,B > 235) nas bordas
- Cortar até a "bounding box" do conteúdo não-branco
- Salvar de volta no mesmo arquivo

Isso preserva 100% as logos originais — só remove o whitespace ao redor — fazendo as 3 ficarem visualmente do mesmo tamanho quando exibidas com a mesma altura CSS.

### 3. Ajustar o container no `src/pages/Index.tsx` (linhas 150-157)
Trocar o bloco atual (`h-24` + `bg-navy` + `max-h-16`) por um container limpo de altura uniforme:

```tsx
<div className="flex h-20 w-full items-center">
  <img
    src={card.logo}
    alt={card.alt}
    className="h-full w-auto max-w-full object-contain object-left"
    loading="lazy"
  />
</div>
```

- `h-20` (80px) e `h-full` no `<img>` → as 3 logos preenchem exatamente a mesma altura
- Sem `bg-navy` → fundo do card volta ao branco original
- `object-left` → alinhamento consistente entre os 3 cards

## Resultado esperado
- Logos originais (cores e desenho intactos como você enviou)
- 3 logos com a mesma altura visual e alinhadas à esquerda
- Fundo branco dos cards preservado
