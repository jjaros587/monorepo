import { useEffect } from 'react';

export const useEventListener = <K extends keyof DocumentEventMap>(
  type: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => any
) => {
  useEffect(() => {
    document.addEventListener<K>(type, listener, true);

    return () => {
      document.removeEventListener(type, listener, true);
    };
  }, [listener]);
};
