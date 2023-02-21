import styled, { TextColors, TextVariants } from '@theme'

interface Props {
  color?: TextColors
  variant?: TextVariants
}

const TextBase = styled.span<Props>`
  ${(p) => p.theme.font[p.variant || 'body'](p.color)};
`

export const Text: React.FC<Props> = ({ children, variant, ...props }) => {
  return (
    <TextBase variant={variant} {...props}>
      {children}
    </TextBase>
  )
}
