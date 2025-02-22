const COMMON_COLORS = {
  '--color-white': 'hsl(0, 0%, 100%)',
  '--color-dark': 'hsl(230, 20%, 8%)',

  '--color-purple': 'hsl(251, 25%, 46%)',
  '--color-red': 'hsl(358, 90%, 58%)',
};

export const LIGHT_COLORS = {
  '--color-text': 'hsl(0, 0%, 5%)',
  '--color-background': 'hsl(0, 0%, 100%)',

  '--color-primary': 'hsl(345, 90%, 67%)',
  '--color-secondary': 'hsl(0, 0%, 92%)',

  ...COMMON_COLORS,
};

export const DARK_COLORS = {
  '--color-text': 'hsl(0, 0%, 100%)',
  '--color-background': 'hsl(230, 20%, 8%)',

  '--color-primary': 'hsl(245, 98%, 67%)',
  '--color-secondary': 'hsl(0, 0%, 45%)',

  ...COMMON_COLORS,
};
