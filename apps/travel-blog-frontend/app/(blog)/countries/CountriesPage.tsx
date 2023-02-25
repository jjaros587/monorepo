'use client';

import { CountryEntity } from '@graphql';
import Link from 'next/link';
import { ArticleListingFetcher, CountryIcon } from '@components';
import { Inline, Text } from '@ui';

interface Props {
  countries: CountryEntity[];
}

export default ({ countries }: Props) => {
  debugger;
  return (
    <Inline gap="L">
      {countries.map(({ attributes }) => (
        <Link href={`/countries/${attributes?.slug}`}>
          <Inline gap="S" alignY="center">
            <CountryIcon code={attributes?.code} />
            <Text>{attributes.name}</Text>
          </Inline>
        </Link>
      ))}
      <ArticleListingFetcher
        filters={{
          country: {
            id: {
              $notNull: true,
            },
          },
        }}
      />
    </Inline>
  );
};
