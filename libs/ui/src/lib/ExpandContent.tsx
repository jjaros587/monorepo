import { useState } from 'react'
import { ReactFCWithChildren } from './types'
import styled from '@theme'
import { Inline } from './layout/components/Inline'

interface Props {
  showLabel?: string
  hideLabel?: string
}

const ToggleButton = styled.button`
  cursor: pointer;
  background: none;
  text-decoration: underline;
  ${(p) => p.theme.font.body()}

  :hover {
    ${(p) => p.theme.font.body('light')}
  }
`

export const ExpandContent: ReactFCWithChildren<Props> = ({ showLabel, hideLabel, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const label = isExpanded ? hideLabel || 'Hide' : showLabel || 'Show'
  const iconName = isExpanded ? 'caret-up' : 'caret-down'

  const toggle = () => setIsExpanded((isExpanded) => !isExpanded)

  return (
    <div>
      <ToggleButton onClick={toggle}>
        <Inline gap="S">
          <i className={`fa-solid fa-${iconName}`} />
          {label}
        </Inline>
      </ToggleButton>
      {isExpanded ? <div>{children}</div> : null}
    </div>
  )
}
