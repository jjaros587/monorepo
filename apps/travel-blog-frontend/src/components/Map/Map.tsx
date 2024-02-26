import React, { useState } from 'react'

import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import './styles.css'
import { features } from './features'
import { useRouter } from 'next/navigation'
import { ContentManager } from '../../../lib/ContentManager'
import styled, { css } from '@theme'

const Container = styled.div<{ isInteractive: boolean }>`
  ${(p) =>
    p.isInteractive &&
    css`
      cursor: pointer;
    `}
`

export const Map = () => {
  const router = useRouter()
  const countries = new ContentManager().countries.allItems.map((item) => item.slug)

  const handleClick = (geo) => () => {
    router.push(`/countries/${geo.id.toLowerCase()}`)
  }

  return (
    <ComposableMap>
      {/* <ZoomableGroup center={[0, 0]}> */}
      <Geographies geography={features}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isInteractive = countries.includes(geo.id.toLowerCase())

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={isInteractive ? handleClick(geo) : undefined}
                style={{
                  cursor: isInteractive ? 'pointer' : 'none',
                  default: {
                    fill: isInteractive ? '#DD4132' : '#F0EAD6',
                    stroke: isInteractive ? '#9E1030' : '#B2A27D',
                    strokeWidth: 0.75,
                    outline: 'none',
                    transition: 'all 250ms',
                  },
                  hover: {
                    fill: isInteractive ? '#FF6F61' : '#F0EAD6',
                    stroke: isInteractive ? '#9E1030' : '#B2A27D',
                    strokeWidth: 0.75,
                    outline: 'none',
                    transition: 'all 250ms',
                  },
                  pressed: {
                    fill: '#DD4132',
                    stroke: '#9E1030',
                    strokeWidth: 0.75,
                    outline: 'none',
                    transition: 'all 250ms',
                  },
                }}
              />
            )
          })
        }
      </Geographies>
      {/* </ZoomableGroup> */}
    </ComposableMap>
  )
}
