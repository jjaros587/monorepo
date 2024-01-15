import { ReactFCWithChildren } from './types'
import { Tooltip as MuiTooltip } from '@mui/material'

interface Props {
  tooltip: string
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
}

export const Tooltip: ReactFCWithChildren<Props> = ({
  tooltip,
  placement = 'top-end',
  children,
}) => {
  return (
    <MuiTooltip title={tooltip} placement={placement} arrow>
      <div>{children}</div>
    </MuiTooltip>
  )
}
