import { useMemo } from 'react';
import { Class } from '../app/types';
import { ServiceContainer } from '../utils';

export const useService = <T,>(serviceClass: Class<T>): T => {
  return useMemo(() => ServiceContainer.get(serviceClass), [serviceClass]);
};
