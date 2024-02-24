import styled, { css } from '@theme'
import { Box } from '@ui'
import { FC } from 'react'

const styles = css`
  background-color: var(--colors-surface);
`

const invertedStyles = css`
  background-color: var(--colors-secondary);
`

interface Props {
  iconName: string
  link: string
  inverted?: boolean
}

const IconBox = styled(Box)<{ inverted: Props['inverted'] }>`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;

  :hover {
    background-color: var(--colors-primary);
  }

  ${({ inverted }) => (inverted ? invertedStyles : styles)}
`

export const IconLink: FC<Props> = ({ iconName, link, inverted = false }) => {
  return (
    <a href={link} target="_blank">
      <IconBox align="center" alignY="center" inverted={inverted}>
        <i className={`fa-brands fa-${iconName} fa-lg`} />
      </IconBox>
    </a>
  )
}
