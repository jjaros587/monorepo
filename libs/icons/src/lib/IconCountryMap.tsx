import React, { Suspense } from 'react';
import { Colors, PositiveSpaceUnit } from '@theme';

interface IconProps {
  name: string;
  color?: Colors;
  size?: PositiveSpaceUnit;
}

export function IconCountryMap({
  name,
  ...rest
}: IconProps): JSX.Element | null {
  const Component = React.lazy(
    () => import(`!svg-react-loader?name=Icon!./assets/countryMaps/${name}.svg`)
  );

  return (
    <Suspense fallback={'loading'}>
      <Component height="200px" fill="green" />
    </Suspense>
  );
}
