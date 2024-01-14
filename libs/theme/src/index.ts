import * as styledComponents from 'styled-components'
import { ColorsTokens, Colors, TextColors, FontColorsTokens } from './lib/tokens/colors'
import {
  LayoutSpacing,
  Spacing,
  PositiveSpaceUnit,
  PositiveLayoutSpaceUnit,
  IconSizes,
} from './lib/tokens/spacing'
import { font, TextVariants } from './lib/mixins/fonts'
import { padding, margin } from './lib/mixins/spacing'
import { merge } from 'lodash'

const theme = {
  colors: ColorsTokens,
  spacing: Spacing,
  layoutSpacing: LayoutSpacing,
  fontColors: FontColorsTokens,
  font,
  padding,
  margin,
}

export type Theme = typeof theme

const createTheme = (args: {
  colors?: Partial<Theme['colors']>
  textColors?: Partial<Theme['fontColors']>
}) => {
  return merge(theme, args)
}

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  ThemeContext,
  createGlobalStyle,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<typeof theme>

const generateCssVariables = (theme: Theme) => {
  let cssVariables = ''

  for (const category in theme) {
    const categoryValues = theme[category]

    for (const key in categoryValues) {
      const variableName = `--${category}-${key}`
      const variableValue = categoryValues[key]
      cssVariables += `${variableName}: ${variableValue};\n`
    }
  }

  return cssVariables
}

const GlobalStyle = createGlobalStyle`
  :root {
    ${(props) => generateCssVariables(props.theme)}
  }
`

export default styled
export type { ThemeProps } from 'styled-components'
export { css, keyframes, ThemeProvider, theme, ThemeContext, createTheme, GlobalStyle }
export type {
  PositiveSpaceUnit,
  PositiveLayoutSpaceUnit,
  IconSizes,
  Colors,
  TextVariants,
  TextColors,
}
