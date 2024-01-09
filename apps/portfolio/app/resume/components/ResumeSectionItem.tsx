import { ReactFCWithChildren } from '@ui'
import Grid from '@mui/material/Grid'
import { ReactNode } from 'react'

interface Props {
  left: ReactNode
  right: ReactNode
}

export const ResumeSectionItem: ReactFCWithChildren<Props> = ({ left, right }) => {
  return (
    <Grid container rowSpacing={{ xs: 3, md: 0 }} columnSpacing={4}>
      <Grid item xs={12} md={4}>
        {left}
      </Grid>
      <Grid item xs={12} md={8}>
        {right}
      </Grid>
    </Grid>
  )
}
