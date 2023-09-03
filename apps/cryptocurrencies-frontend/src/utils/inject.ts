import { ServiceContainer } from './ServiceContainer'

type Class<T> = new (...args: any[]) => T

export function injectSafe<T>(classGetter: () => Class<T>) {
  return (target: any, propertyKey: string | symbol) => {
    const instanceMap = new WeakMap<any, any>()

    Object.defineProperty(target, propertyKey, {
      get: function (this: any) {
        if (!instanceMap.has(this)) {
          const classConstructor = classGetter()

          if (!classConstructor) {
            throw new Error(
              `Unable to inject service into property ${target.constructor.name}#${String(
                propertyKey,
              )}. Service class is undefined. Cyclic dependency?.`,
            )
          } else {
            instanceMap.set(this, ServiceContainer.get(classConstructor))
          }
        }

        return instanceMap.get(this)
      },
      set: function (this: any, value: any) {
        instanceMap.set(this, value)
      },
      enumerable: false,
    })
  }
}
