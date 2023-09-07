import { useMemo } from 'react'
import { ServiceContainer } from '../utils'
import { Class } from '../app/types'

type Classes<T> = {
  [K in keyof T]: Class<T[K]>
}

export const useServices = <T extends unknown[]>(...serviceClasses: Classes<T>): T => {
  return useMemo(
    () => serviceClasses.map((service) => ServiceContainer.get(service)) as T,
    [serviceClasses],
  )
}
