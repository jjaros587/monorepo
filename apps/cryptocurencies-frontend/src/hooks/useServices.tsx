import { ServiceContainer } from '@utils'
import { useMemo } from 'react'
import { Class } from 'src/app/types'

type Classes<T> = {
  [K in keyof T]: Class<T[K]>
}

export const useServicesa = <T extends unknown[]>(...serviceClasses: Classes<T>): T => {
  return useMemo(() => serviceClasses.map((service) => ServiceContainer.get(service)) as T, [serviceClasses])
}
