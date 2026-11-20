import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral';

/**
 * T4H portfolio theme.
 *
 * Brand authority: OIKOS portfolio workbook.
 * Component implementation: Astryx.
 * This file deliberately uses only documented public theme fields and semantic
 * token names. The seven portfolio layers are exposed as theme-local tokens
 * for app-level use; they do not replace Astryx's own token vocabulary.
 */
export const t4hPortfolioTheme = defineTheme({
  name: 't4h-portfolio',
  extends: neutralTheme,
  color: {
    accent: ['#17324D', '#DEE8FF'],
    neutralStyle: 'cool',
    contrast: 'standard',
  },
  tokens: {
    '--color-accent': ['#17324D', '#DEE8FF'],
    '--color-on-accent': ['#FFFFFF', '#0B1F33'],
    '--color-background-body': ['#FFFFFF', '#0B1F33'],
    '--color-background-surface': ['#FFFFFF', '#17324D'],
    '--color-background-card': ['#FFFFFF', '#17324D'],
    '--color-text-primary': ['#17324D', '#FFFFFF'],
    '--color-text-secondary': ['#475569', '#E9EDF2'],
    '--color-border': ['#E9EDF2', '#475569'],
    '--focus-outline-color': 'var(--color-accent)',
  },
  localTokens: {
    '--t4h-layer-l1': '#17324D',
    '--t4h-layer-l1-dark': '#0B1F33',
    '--t4h-layer-l1-light': '#E9EDF2',
    '--t4h-layer-l2': '#168A5B',
    '--t4h-layer-l2-dark': '#0E5F3F',
    '--t4h-layer-l2-light': '#DFF5EA',
    '--t4h-layer-l3': '#0F766E',
    '--t4h-layer-l3-dark': '#0B4F4A',
    '--t4h-layer-l3-light': '#CBEFE7',
    '--t4h-layer-l4': '#3155A4',
    '--t4h-layer-l4-dark': '#1E3678',
    '--t4h-layer-l4-light': '#DEE8FF',
    '--t4h-layer-l5': '#6F42C1',
    '--t4h-layer-l5-dark': '#4B2A86',
    '--t4h-layer-l5-light': '#EEE5FF',
    '--t4h-layer-l6': '#D97706',
    '--t4h-layer-l6-dark': '#92400E',
    '--t4h-layer-l6-light': '#FEF3C7',
    '--t4h-layer-l7': '#6B7280',
    '--t4h-layer-l7-dark': '#374151',
    '--t4h-layer-l7-light': '#F3F4F6',
  },
});
