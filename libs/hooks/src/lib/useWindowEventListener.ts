import { useEffect } from 'react'

export const useWindowEventListener = <K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => unknown,
) => {
  useEffect(() => {
    window.addEventListener<K>(type, listener, true)

    return () => {
      window.removeEventListener(type, listener, true)
    }
  }, [listener, type])
}
