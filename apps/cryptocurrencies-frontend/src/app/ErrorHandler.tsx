import { ErrorInfo, FC, ReactNode } from 'react'
import { useEventListener } from '@hooks'
import React from 'react'

interface Props {
  children?: ReactNode
}

export class ErrorHandler extends React.Component<Props> {
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    debugger
  }

  render() {
    return <>{this.props.children}</>
  }
}
