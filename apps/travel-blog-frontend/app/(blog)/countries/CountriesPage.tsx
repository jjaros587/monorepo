'use client';

import { CountryEntity } from '@graphql';
import Link from 'next/link';
import { CountryIcon } from '@components';
import { Grid, Inline, Text } from '@ui';

interface Props {
  countries: CountryEntity[];
}

export default ({ countries }: Props) => {
  return (
    <Grid gap="L">
      {countries.map(({ attributes }) => (
        <Link href={`/countries/${attributes?.slug}`}>
          <Inline gap="S" alignY="center">
            <CountryIcon code={attributes?.code} />
            <Text>{attributes.name}</Text>
          </Inline>
        </Link>
      ))}
    </Grid>
  );
};
