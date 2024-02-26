import styled from '@theme'
import { Button } from '@ui'
import { useCallback, useState } from 'react'
import { useDocumentEventListener } from '@hooks'

const ScrollButton = styled(Button)<{ visible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;

  display: ${({ visible }) => (visible ? 'block' : 'none')};
`

export const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const scrollValue = 1000

  const scrollToTop = useCallback(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [])

  const handleScroll = useCallback(() => {
    if (document.body.scrollTop > scrollValue || document.documentElement.scrollTop > scrollValue) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [])

  useDocumentEventListener('scroll', handleScroll)

  return (
    <ScrollButton visible={visible} onClick={scrollToTop}>
      Top
    </ScrollButton>
  )
}
