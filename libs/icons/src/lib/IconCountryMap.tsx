import React, { Suspense } from 'react';

interface IconProps {
  name: string;
  color?: string;
}

export function IconCountryMap({
  name,
  color = 'green',
}: IconProps): JSX.Element | null {
  const Component = React.lazy(
    () => import(`!svg-react-loader?name=Icon!./assets/countryMaps/${name}.svg`)
  );

  return (
    <Suspense fallback={'loading'}>
      <Component height="auto" width="100%" fill={color} />
    </Suspense>
  );
}
