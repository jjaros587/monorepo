import styled, { css, PositiveSpaceUnit } from '@theme'
import React from 'react'
import { Align, AlignY } from '../types'

interface Props {
  gap?: PositiveSpaceUnit
  alignY?: AlignY
  align?: Align
}

const InlineBase = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(p) => p.align};
  align-items: ${(p) => p.alignY};

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
  ${(p) =>
    p.flexGrow &&
    css`
      flex: 1;
    `}
  ${(p) =>
    p.width &&
    css`
      width: ${p.width};
    `}
`

const _Inline: React.FC<Props> = (props) => (
  <InlineBase {...props}>
    {React.Children.map(props.children, (child) =>
      child ? (
        <InlineItemBase
          flexGrow={(child as React.ReactElement)?.props?.flexGrow as boolean}
          width={(child as React.ReactElement)?.props?.width as string}
        >
          {child}
        </InlineItemBase>
      ) : null
    )}
  </InlineBase>
)

export const InlineItem: React.FC<ItemProps> = (props) => <>{props.children}</>
export const Inline = Object.assign(_Inline, { Item: InlineItem })
