export const Spacing = {
  NONE: '0',
  XXS: '2px',
  XS: '4px',
  S: '8px',
  M: '16px',
  L: '24px',
  XL: '32px',
  XXL: '64px',
};

export const LayoutSpacing = {
  S: '100px',
  M: '200px',
  L: '400px',
  XL: '800px',
  auto: 'auto',
  full: '100%',
};

export const IconSpacing = {
  XXS: '2px',
  XS: '4px',
  S: '8px',
  M: '16px',
  L: '24px',
  XL: '32px',
  XXL: '64px',
};

export type PositiveSpaceUnit = keyof typeof Spacing;
export type PositiveLayoutSpaceUnit = keyof typeof LayoutSpacing;
export type IconSizes = keyof typeof IconSpacing;
