export const theme = {
  colors: {
    background: {
      primary: 'rgb(8, 9, 10)',
      secondary: 'rgb(15, 16, 17)',
      tertiary: 'rgb(20, 21, 22)',
      header: 'rgba(10, 10, 10, 0.8)',
      card: 'rgb(40, 40, 44)',
    },
    text: {
      primary: 'rgb(247, 248, 248)',
      secondary: 'rgb(208, 214, 224)',
      muted: 'rgb(138, 143, 152)',
      subtle: 'rgb(98, 102, 109)',
    },
    accent: {
      blue: '#4ea7fc',
      indigo: '#5e6ad2',
      red: '#eb5757',
      green: '#4cb782',
      orange: '#fc7840',
      yellow: '#f2c94c',
    },
    semantic: {
      focus: '#5e6ad2',
      border: 'rgb(62, 62, 68)',
      white: '#fff',
      black: '#000',
    },
  },
  typography: {
    fontFamilies: {
      primary:
        '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", sans-serif',
      serif: '"Tiempos Headline", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      monospace: '"Berkeley Mono", ui-monospace, "SF Mono", "Menlo", monospace',
    },
    fontWeights: {
      light: '300',
      normal: '400',
      medium: '510',
      semibold: '590',
      bold: '680',
    },
    fontSizes: {
      micro: '0.6875rem',
      mini: '0.75rem',
      small: '0.8125rem',
      regular: '0.9375rem',
      large: '1.125rem',
      title1: '2.25rem',
      title2: '1.5rem',
      title3: '1.25rem',
    },
  },
  spacing: {
    borderRadius: {
      small: '4px',
      medium: '6px',
      large: '8px',
      xlarge: '12px',
      xxlarge: '16px',
      rounded: '9999px',
      pill: '30px',
    },
    padding: {
      page: '24px',
      container: '0px 24px',
      button: '0px 16px',
      card: '32px 24px',
    },
    layout: {
      headerHeight: '64px',
      maxWidth: '1024px',
      pageMaxWidth: '1024px',
      proseMaxWidth: '624px',
    },
  },
  effects: {
    shadows: {
      none: '0px 0px 0px transparent',
      small: 'rgba(0, 0, 0, 0.2) 0px 4px 24px 0px',
      medium: 'rgba(0, 0, 0, 0.35) 0px 7px 32px 0px',
      card: 'rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px',
      glow: 'rgba(255, 255, 255, 0.04) 0px 1.503px 5.261px 0px inset, rgba(255, 255, 255, 0.1) 0px -0.752px 0.752px 0px inset',
    },
    gradients: {
      subtle: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0) 20%)',
      card: 'linear-gradient(134deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 55%)',
      surface: 'linear-gradient(rgba(255, 255, 255, 0.1) 40%, rgba(8, 9, 10, 0.1))',
      button: 'linear-gradient(rgb(52, 52, 52), rgb(45, 45, 45))',
    },
    transitions: {
      quick: '0.1s',
      regular: '0.25s',
      highlightFadeIn: '0s',
      highlightFadeOut: '0.15s',
    },
  },
} as const;

export type Theme = typeof theme;
