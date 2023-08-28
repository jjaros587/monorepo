import { Suspense, lazy } from 'react'

interface IconSocialMediaProps {
  name: 'instagram' | 'facebook' | 'youtube'
}

export function IconSocialMedia({ name }: IconSocialMediaProps): JSX.Element | null {
  const Component = lazy(() =>
    import(`./assets/social/${name}.svg`).then((module) => ({ default: module })),
  )

  return (
    <Suspense fallback={'loading'}>
      <Component />
    </Suspense>
  )
}
