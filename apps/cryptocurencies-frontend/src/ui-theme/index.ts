import * as styledComponents from 'styled-components'
import { ColorsTokens, Colors, TextColors, FontColorsTokens } from './tokens/colors'
import { LayoutSpacing, Spacing, PositiveSpaceUnit, PositiveLayoutSpaceUnit } from './tokens/spacing'
import { font, TextVariants } from './mixins/fonts'
import { padding, margin } from './mixins/spacing'

const theme = {
  colors: ColorsTokens,
  spacing: Spacing,
  layoutSpacing: LayoutSpacing,
  fontColors: FontColorsTokens,
  font,
  padding,
  margin
}

export type Theme = typeof theme

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  ThemeContext
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<typeof theme>

export default styled
export type { ThemeProps } from 'styled-components'
export { css, keyframes, ThemeProvider, theme, ThemeContext }
export type { PositiveSpaceUnit, PositiveLayoutSpaceUnit, Colors, TextVariants, TextColors }
