## Objetivo
Substituir os 3 ícones genéricos da seção **"Tudo que foi construído em 8 anos"** pelas logos reais dos produtos enviadas: Pós-Graduação, Food Smart Pro e VerificaSmart.

## Observações sobre as logos recebidas
- **Pós-Graduação** (`logo_posgraduacao.png`) — vermelho/coral sobre fundo branco, formato horizontal largo
- **Food Smart Pro** (`logo_foodsmartpro.png`) — vermelho/coral sobre fundo branco, formato quase quadrado
- **VerificaSmart** (`logo_verificasmart.png`) — preto + check verde sobre fundo branco, formato horizontal

Todas têm fundo branco e proporções diferentes — então o atual quadrado colorido (`bg-pink/orange/sky` com ícone branco) não vai funcionar. Vou trocar por um **container neutro retangular** que respeita cada proporção.

## Mudanças

### 1. Copiar as logos para o projeto
- `user-uploads://logo_posgraduacao.png` → `src/assets/logo-posgraduacao.png`
- `user-uploads://logo_foodsmartpro.png` → `src/assets/logo-foodsmart-pro.png`
- `user-uploads://logo_verificasmart.png` → `src/assets/logo-verificasmart.png`

### 2. Editar `src/pages/Index.tsx`
- Importar as 3 logos no topo via ES6 (`import logoPos from "@/assets/..."`)
- Remover os imports de ícones não mais usados: `GraduationCap`, `BookOpen`, `ClipboardCheck`
- No array `includedCards`, trocar a propriedade `icon` (componente Lucide) + `accent` (cor de fundo) por uma propriedade `logo` (URL da imagem) e um `alt`
- No JSX dos cards, substituir o bloco:
  ```
  <div className="...bg-pink..."><Icon /></div>
  ```
  por:
  ```
  <div className="flex h-16 items-center">
    <img src={card.logo} alt={card.alt} className="max-h-16 w-auto object-contain" />
  </div>
  ```
- Manter `h-16` (64px) fixo para alinhar a base das 3 logos entre os cards, mesmo com proporções diferentes
- Manter todo o restante do card (título, lista de items, hover, sombra) intacto

### 3. Resultado visual esperado
```text
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ [LOGO PÓS]      │  │ [LOGO FOOD]     │  │ [✓ verificasmart]│
│                 │  │                 │  │                 │
│ Pós-Graduação   │  │ Food Smart Pro  │  │ VerificaSmart   │
│ em RT...        │  │ (Vitalício)     │  │                 │
│ ✓ 10 módulos    │  │ ✓ 11+ cursos    │  │ ✓ 3 meses...    │
│ ...             │  │ ...             │  │ ...             │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

## Notas técnicas
- Sem dependências novas
- `object-contain` + `max-h-16 w-auto` preserva a proporção de cada logo sem distorção
- Bundling otimizado pelo Vite (hash, tree-shaking)
- Nenhuma outra seção é afetada
