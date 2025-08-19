# useMediaQuery Hook

Hook personalizado para trabalhar com breakpoints do Tailwind CSS no React.

## Funcionalidades

- ✅ Breakpoints baseados no Tailwind CSS (sm, md, lg, xl, 2xl)
- ✅ Verificações de largura (acima/abaixo de breakpoints)
- ✅ Breakpoint atual
- ✅ Largura atual da tela
- ✅ Função para queries customizadas
- ✅ Hook adicional para breakpoints específicos
- ✅ Utilitários para uso fora de componentes React

## Breakpoints do Tailwind

- **xs**: < 640px
- **sm**: >= 640px
- **md**: >= 768px  
- **lg**: >= 1024px
- **xl**: >= 1280px
- **2xl**: >= 1536px

## Como usar

### Uso básico

```tsx
import { useMediaQuery } from '@/hooks/useMediaQuery';

function MyComponent() {
  const {
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
    currentBreakpoint,
    width
  } = useMediaQuery();

  return (
    <div>
      <p>Breakpoint atual: {currentBreakpoint}</p>
      <p>Largura da tela: {width}px</p>
      
      {isMd && <p>Tela média ou maior</p>}
      {isLg && <p>Tela grande ou maior</p>}
    </div>
  );
}
```

### Verificações de largura

```tsx
function ResponsiveComponent() {
  const {
    isAboveMd,
    isBelowLg,
    isAboveSm,
    isBelowXl
  } = useMediaQuery();

  return (
    <div>
      {isAboveMd && <p>Acima do breakpoint MD</p>}
      {isBelowLg && <p>Abaixo do breakpoint LG</p>}
      {isAboveSm && isBelowXl && <p>Entre SM e XL</p>}
    </div>
  );
}
```

### Queries customizadas

```tsx
function CustomQuery() {
  const { matches } = useMediaQuery();

  const isPortrait = matches('(orientation: portrait)');
  const isPrint = matches('print');
  const isCustomWidth = matches('(min-width: 900px)');

  return (
    <div>
      {isPortrait && <p>Orientação retrato</p>}
      {isPrint && <p>Modo de impressão</p>}
      {isCustomWidth && <p>Largura customizada >= 900px</p>}
    </div>
  );
}
```

### Hook para breakpoint específico

```tsx
import { useTailwindBreakpoint } from '@/hooks/useMediaQuery';

function BreakpointSpecific() {
  const { breakpoint, isXs, isMd, isXl } = useTailwindBreakpoint();

  return (
    <div>
      <p>Breakpoint: {breakpoint}</p>
      
      {isXs && <MobileComponent />}
      {isMd && <TabletComponent />}
      {isXl && <DesktopComponent />}
    </div>
  );
}
```

### Renderização condicional

```tsx
function ConditionalRender() {
  const { isMd, isLg, currentBreakpoint } = useMediaQuery();

  // Renderizar diferentes componentes baseados no breakpoint
  if (currentBreakpoint === 'xs' || currentBreakpoint === 'sm') {
    return <MobileLayout />;
  }

  if (isMd) {
    return <TabletLayout />;
  }

  if (isLg) {
    return <DesktopLayout />;
  }

  return <DefaultLayout />;
}
```

### Uso com CSS-in-JS

```tsx
function StyledComponent() {
  const { isSm, isMd, isLg } = useMediaQuery();

  const styles = {
    fontSize: isSm ? '14px' : isMd ? '16px' : isLg ? '18px' : '20px',
    padding: isSm ? '8px' : '16px',
    margin: isMd ? '12px' : '24px'
  };

  return <div style={styles}>Conteúdo responsivo</div>;
}
```

### Utilitário fora de componentes

```tsx
import { getBreakpoint, TAILWIND_BREAKPOINTS } from '@/hooks/useMediaQuery';

// Usar fora de componentes React
function handleResize() {
  const currentWidth = window.innerWidth;
  const breakpoint = getBreakpoint(currentWidth);
  
  console.log(`Breakpoint atual: ${breakpoint}`);
  console.log(`Breakpoints disponíveis:`, TAILWIND_BREAKPOINTS);
}

window.addEventListener('resize', handleResize);
```

## API

### `useMediaQuery()`

Retorna um objeto com:

- `matches(query: string)`: Função para queries customizadas
- `isSm`, `isMd`, `isLg`, `isXl`, `is2xl`: Booleanos para cada breakpoint
- `isAboveSm`, `isAboveMd`, etc.: Verifica se está acima do breakpoint
- `isBelowSm`, `isBelowMd`, etc.: Verifica se está abaixo do breakpoint
- `currentBreakpoint`: String com o breakpoint atual
- `width`: Número com a largura atual da tela

### `useTailwindBreakpoint()`

Retorna um objeto mais simples:

- `breakpoint`: String com o breakpoint atual
- `width`: Número com a largura atual
- `isXs`, `isSm`, `isMd`, `isLg`, `isXl`, `is2xl`: Booleanos para breakpoint exato

### `getBreakpoint(width: number)`

Função utilitária que retorna o breakpoint para uma largura específica.

### `TAILWIND_BREAKPOINTS`

Objeto constante com os valores dos breakpoints do Tailwind.
