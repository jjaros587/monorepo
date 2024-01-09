import { Suspense, lazy } from 'react'

interface IconProps {
  name: string
  color?: string
}

export function IconCountryMap({ name, color = 'green' }: IconProps): JSX.Element | null {
  const Component = lazy(() =>
    import(`./assets/countryMaps/${name}.svg`).then((module) => ({ default: module })),
  )

  return (
    <Suspense fallback={'loading'}>
      <Component height="auto" width="100%" fill={color} />
    </Suspense>
  )
}
