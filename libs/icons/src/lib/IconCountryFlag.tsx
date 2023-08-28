import 'flag-icons/css/flag-icons.min.css'
import styled, { css } from '@theme'
import { FC } from 'react'

interface BaseProps {
  rounded?: boolean
  size?: string
}
interface CountryIconProps extends BaseProps {
  code: string
}

const Container = styled.span<Required<BaseProps>>`
  font-size: ${({ size }) => size};

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 100%;
    `}
`

export const IconCountryFlag: FC<CountryIconProps> = ({ code, rounded = true, size = '30px' }) => {
  return <Container className={`fi fi-${code} fis`} rounded={rounded} size={size} />
}
