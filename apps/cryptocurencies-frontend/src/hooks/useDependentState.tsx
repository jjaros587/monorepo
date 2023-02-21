import { DependencyList, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

export const useDependentState = <S,>(
  initialState: S | (() => S),
  deps: DependencyList = []
): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState(initialState)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      setState(initialState)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return [state, setState]
}
