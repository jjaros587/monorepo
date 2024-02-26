import styled, { TextColors, TextVariants, css } from '@theme'
import { ReactFCWithChildren } from './types'

export function getTextTag(variant?: TextVariants): keyof JSX.IntrinsicElements | undefined {
  switch (variant) {
    case 'caption':
      return 'small'
    case 'data':
      return 'code'
    case 'display':
    case 'headline1':
      return 'h1'
    case 'headline2':
      return 'h2'
    case 'headline3':
      return 'h3'
    case 'body':
    case 'bodyMedium':
      return 'span'
    case 'paragraph':
      return 'p'
  }
}

interface Props {
  color?: TextColors
  variant?: TextVariants
  style?: React.CSSProperties
  noWrap?: boolean
}

const TextBase = styled.span<Props>`
  ${(p) => p.theme.font[p.variant || 'body'](p.color)};
  ${(p) =>
    p.noWrap &&
    css`
      white-space: nowrap;
    `};
`

export const Text: ReactFCWithChildren<Props> = ({ children, variant, ...props }) => {
  return (
    <TextBase variant={variant} {...props} as={getTextTag(variant)}>
      {children}
    </TextBase>
  )
}
