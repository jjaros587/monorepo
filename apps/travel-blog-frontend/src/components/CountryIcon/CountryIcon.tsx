"use client"
import { FC } from "react"
import styled, { css } from "styled-components"

interface BaseProps {
  rounded?: boolean
  size?: string
}
interface CountryIconProps extends BaseProps {
  code: string
}

const Container = styled.span<BaseProps>`
  font-size: ${({ size }) => size};

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 100%;
    `}
`

export const CountryIcon: FC<CountryIconProps> = ({
  code,
  rounded = true,
  size = "30px",
}) => {
  return (
    <Container className={`fi fi-${code} fis`} rounded={rounded} size={size} />
  )
}
