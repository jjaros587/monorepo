import { LinearProgress } from '@material-ui/core'
import { FC } from 'react'

interface Props {
  level: number
  total: number
}

export const ProgressBar: FC<Props> = ({ level, total }) => {
  const progress = (level / total) * 100

  return (
    <div>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  )
}
