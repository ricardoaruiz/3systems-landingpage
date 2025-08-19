'use client';

import { useEffect, useState } from 'react';

// Breakpoints padrão do Tailwind CSS
const TAILWIND_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

type BreakpointKey = keyof typeof TAILWIND_BREAKPOINTS;

interface UseMediaQueryReturn {
  // Função para consultar breakpoints específicos
  matches: (query: string) => boolean;

  // Breakpoints individuais
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2xl: boolean;

  // Helpers para verificar se está acima/abaixo de um breakpoint
  isAboveSm: boolean;
  isAboveMd: boolean;
  isAboveLg: boolean;
  isAboveXl: boolean;
  isAbove2xl: boolean;

  isBelowSm: boolean;
  isBelowMd: boolean;
  isBelowLg: boolean;
  isBelowXl: boolean;
  isBelow2xl: boolean;

  // Breakpoint atual
  currentBreakpoint: BreakpointKey | 'xs';

  // Largura atual da tela
  width: number;
}

export const useMediaQuery = (): UseMediaQueryReturn => {
  const [width, setWidth] = useState(0);
  const [matches, setMatches] = useState<Record<string, boolean>>({});

  // Função para avaliar media queries
  const evaluateQuery = (query: string): boolean => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.matchMedia(query).matches;
  };

  // Função para obter o breakpoint atual
  const getCurrentBreakpoint = (currentWidth: number): BreakpointKey | 'xs' => {
    if (currentWidth >= TAILWIND_BREAKPOINTS['2xl']) {
      return '2xl';
    }
    if (currentWidth >= TAILWIND_BREAKPOINTS.xl) {
      return 'xl';
    }
    if (currentWidth >= TAILWIND_BREAKPOINTS.lg) {
      return 'lg';
    }
    if (currentWidth >= TAILWIND_BREAKPOINTS.md) {
      return 'md';
    }
    if (currentWidth >= TAILWIND_BREAKPOINTS.sm) {
      return 'sm';
    }
    return 'xs';
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width
    updateWidth();

    // Add resize listener
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Calcular todos os breakpoints baseados na largura atual
  const isSm = width >= TAILWIND_BREAKPOINTS.sm;
  const isMd = width >= TAILWIND_BREAKPOINTS.md;
  const isLg = width >= TAILWIND_BREAKPOINTS.lg;
  const isXl = width >= TAILWIND_BREAKPOINTS.xl;
  const is2xl = width >= TAILWIND_BREAKPOINTS['2xl'];

  const isAboveSm = width > TAILWIND_BREAKPOINTS.sm;
  const isAboveMd = width > TAILWIND_BREAKPOINTS.md;
  const isAboveLg = width > TAILWIND_BREAKPOINTS.lg;
  const isAboveXl = width > TAILWIND_BREAKPOINTS.xl;
  const isAbove2xl = width > TAILWIND_BREAKPOINTS['2xl'];

  const isBelowSm = width < TAILWIND_BREAKPOINTS.sm;
  const isBelowMd = width < TAILWIND_BREAKPOINTS.md;
  const isBelowLg = width < TAILWIND_BREAKPOINTS.lg;
  const isBelowXl = width < TAILWIND_BREAKPOINTS.xl;
  const isBelow2xl = width < TAILWIND_BREAKPOINTS['2xl'];

  const currentBreakpoint = getCurrentBreakpoint(width);

  // Função para fazer queries customizadas
  const matchesQuery = (query: string): boolean => {
    if (typeof window === 'undefined') {
      return false;
    }

    // Cache do resultado para evitar recálculos desnecessários
    if (matches[query] === undefined) {
      const result = evaluateQuery(query);
      setMatches((prev) => ({ ...prev, [query]: result }));
      return result;
    }

    return matches[query];
  };

  return {
    matches: matchesQuery,
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
    isAboveSm,
    isAboveMd,
    isAboveLg,
    isAboveXl,
    isAbove2xl,
    isBelowSm,
    isBelowMd,
    isBelowLg,
    isBelowXl,
    isBelow2xl,
    currentBreakpoint,
    width,
  };
};
