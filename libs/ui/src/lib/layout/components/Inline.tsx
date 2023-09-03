import styled, { css, PositiveSpaceUnit } from '@theme'
import React from 'react'
import { Align, AlignY } from '../types'
import { ReactFCWithChildren } from '../../types'

interface Props {
  gap?: PositiveSpaceUnit
  alignY?: AlignY
  align?: Align
  noWrap?: boolean
  fullWidth?: boolean
  fullHeight?: boolean
}

const InlineBase = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(p) => p.align};
  align-items: ${(p) => p.alignY};
  flex-wrap: ${(p) => (p.noWrap ? undefined : 'wrap')};
  width: ${(p) => p.fullWidth && '100%'};
  height: ${(p) => p.fullHeight && '100%'};

  ${(p) =>
    p.gap &&
    css`
      gap: ${p.theme.spacing[p.gap]};
    `}
`

type ItemProps = {
  flexGrow?: boolean
  width?: string
}

const InlineItemBase = styled.div<ItemProps>`
  flex-grow: ${(p) => (p.flexGrow ? 1 : undefined)};

  ${(p) =>
    p.width &&
    css`
      width: ${p.width};
    `}
`

const _Inline: ReactFCWithChildren<Props> = (props) => (
  <InlineBase {...props}>
    {React.Children.map(props.children, (child) =>
      child ? (
        <InlineItemBase
          flexGrow={(child as React.ReactElement)?.props?.flexGrow as boolean}
          width={(child as React.ReactElement)?.props?.width as string}
        >
          {child}
        </InlineItemBase>
      ) : null,
    )}
  </InlineBase>
)

const InlineItem: ReactFCWithChildren<ItemProps> = (props) => <>{props.children}</>

export const Inline = Object.assign(_Inline, { Item: InlineItem })
