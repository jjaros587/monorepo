'use client'

import styled from 'styled-components'
import { SidePanel } from '../SidePanel/SidePanel'
import Grid from '@mui/material/Grid'

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  top: 75px;
  margin: 3rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <Main>
      <div className="contentWrapper">
        <div style={{ width: '100%' }}>
          <Grid container rowSpacing={{ xs: 2 }} columnSpacing={{ xs: 2 }}>
            <Grid item xs={12} sm={12} md={9}>
              {children}
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              {/* <SidePanel /> */}
            </Grid>
          </Grid>
        </div>
      </div>
    </Main>
  )
}
