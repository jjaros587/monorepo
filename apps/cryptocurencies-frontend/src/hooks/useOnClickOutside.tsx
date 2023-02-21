import { RefObject, useEffect, useRef } from 'react'

interface ClickOutsideHandlerProps {
  handler: () => void
  closeOnChildClick?: boolean
  exclude?: RefObject<any>[]
}

interface HookProps<T> extends ClickOutsideHandlerProps {
  ref: RefObject<T>
}

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>({
  ref,
  handler,
  closeOnChildClick = true,
  exclude = []
}: HookProps<T>): void => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const clickedElement = event.target as Node
      const watchedElement = ref.current
      if (!watchedElement || (watchedElement.contains(clickedElement) && !closeOnChildClick)) {
        return
      }
      if (exclude.some((item) => item.current.contains(clickedElement))) {
        return
      }

      handler()
    }

    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [handler])
}

export const ClickOutsideHandler: React.FC<ClickOutsideHandlerProps> = ({ children, ...rest }) => {
  const ref = useRef(null)
  useOnClickOutside({ ref, ...rest })

  return <div ref={ref}>{children}</div>
}
