import { useEffect, useRef } from 'react'
import Typed, { TypedOptions } from 'typed.js'

export const useTypeAnimation = (options: TypedOptions) => {
  const ref = useRef(null)

  useEffect(() => {
    const typed = new Typed(ref.current, options)

    return () => {
      typed.destroy()
    }
  }, [options])

  return ref
}
