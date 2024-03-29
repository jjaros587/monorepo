import styled from '@theme'
import { Text } from '@ui'
import { stardDownload } from '@utils'

const StyledButton = styled.button`
  position: relative;
  height: 30px;

  cursor: pointer;
  background: transparent;

  background-color: var(--colors-surface);
  color: var(--colors-display);

  :hover {
    background-color: var(--colors-primary);
  }
`

export const DownloadResumeButton = () => {
  const handleDownload = () => stardDownload('/jaros_jakub_resume.pdf', 'jaros_jakub_resume.pdf')

  return (
    <StyledButton onClick={handleDownload}>
      <Text color="light">
        <i className="fa-solid fa-download" /> Download CV
      </Text>
    </StyledButton>
  )
}
