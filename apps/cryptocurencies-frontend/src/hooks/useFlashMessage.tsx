import { FlashMessageType } from '@components'
import React, { createContext, useContext, useState } from 'react'

interface FlashMessageContextProps {
  items: FlashMessage[]
  pushMessage: (type: FlashMessageType, title: string, description?: string) => void
}

export const FlashMessageContext = createContext<FlashMessageContextProps>({
  items: [],
  pushMessage: () => console.log('You are using FlashMessageContext out of FlashMessageContext.Provider')
})

interface FlashMessage {
  type: FlashMessageType
  title: string
  content?: string
  id: number
  timeout?: ReturnType<typeof setTimeout>
}

export const FlashMessageProvider: React.FC = ({ children }) => {
  const [buffer, setBuffer] = useState<FlashMessage[]>([])

  const remove = (timestamp: number) => {
    setBuffer((prev) => prev.filter((message) => message.id !== timestamp))
  }

  const pushMessage = (type: FlashMessageType, title: string, description?: string) => {
    const timestamp = Date.now()
    setBuffer((prev) => [
      ...prev,
      {
        type,
        title,
        description,
        id: timestamp,
        timeout: setTimeout(() => {
          remove(timestamp)
        }, 5000)
      }
    ])
  }
  return <FlashMessageContext.Provider value={{ items: buffer, pushMessage }}>{children}</FlashMessageContext.Provider>
}

export const useFlashMessage = () => useContext(FlashMessageContext)
