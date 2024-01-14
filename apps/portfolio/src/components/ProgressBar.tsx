import styled from '@theme'
import { FC } from 'react'

interface Props {
  level: number
  total: number
}

const LevelBar = styled.div<{ progress: number }>`
  width: ${(p) => p.progress}%;
  height: 6px;
  background-color: ${(p) => p.theme.colors.primary};
`

const RemainingBar = styled.div<{ progress: number }>`
  width: ${(p) => p.progress}%;
  height: 6px;
  background-color: white;
`

export const ProgressBar: FC<Props> = ({ level, total }) => {
  const progress = (level / total) * 100

  return (
    <div style={{ display: 'flex' }}>
      <LevelBar progress={progress} />
      <RemainingBar progress={100 - progress} />
    </div>
  )
}
