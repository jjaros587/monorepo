import React, { Suspense } from 'react';

interface IconSocialMediaProps {
  name: 'instagram' | 'facebook' | 'youtube';
}

export function IconSocialMedia({
  name,
}: IconSocialMediaProps): JSX.Element | null {
  const Component = React.lazy(
    () => import(`!svg-react-loader?name=Icon!./assets/social/${name}.svg`)
  );

  return (
    <Suspense fallback={'loading'}>
      <Component fill="green" size="60px" />
    </Suspense>
  );
}
