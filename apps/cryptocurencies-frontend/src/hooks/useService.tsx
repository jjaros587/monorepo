import { ServiceContainer } from '@utils'
import { useMemo } from 'react'
import { Class } from 'src/app/types'

export const useService = <T,>(serviceClass: Class<T>): T => {
  return useMemo(() => ServiceContainer.get(serviceClass), [serviceClass])
}
