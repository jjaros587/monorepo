import styled from '@theme'
import { Box } from '@ui'

const IconBox = styled(Box)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;

  background-color: var(--colors-surface);

  :hover {
    background-color: var(--colors-primary);
  }
`

export const IconLink = ({ iconName, link }: { iconName: string; link: string }) => {
  return (
    <a href={link} target="_blank">
      <IconBox align="center" alignY="center">
        <i className={`fa-brands fa-${iconName} fa-lg`} />
      </IconBox>
    </a>
  )
}
