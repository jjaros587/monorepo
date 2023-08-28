export const ColorsTokens = {
  background: '#121212',
  surface: '#1E1E1E',
  primary: '#009879',
  // Secondary = '#0075A2',
  // Secondary = '#006a98',
  secondary: '#296678',
  terciary: '#6C757D',
  display: '#9B9B9B',
  displayLight: '#E1E1E1',
  onPrimary: '',
  onSecondary: '',
  // Green = '#43C59E',
  // DarkGrey = '#2c3e50',
  // Danger = '#98001F',

  white: '#FFFFFF',
  Icon: 'white',

  // Interaction
  success: '#0ad406',
  danger: '#D72638',
  warning: '#ffb40b',
  info: '#0396ff',
  info2: '#03d0ff',
  disabled: '#6C757D',

  transparent: 'transparent'
}

export const FontColorsTokens = {
  basic: ColorsTokens.display,
  light: ColorsTokens.displayLight,
  success: ColorsTokens.success,
  danger: ColorsTokens.danger,
  warning: ColorsTokens.warning,
  info: ColorsTokens.info,
  info2: ColorsTokens.info2,
  disabled: ColorsTokens.disabled
}

export type Colors = keyof typeof ColorsTokens
export type TextColors = keyof typeof FontColorsTokens
