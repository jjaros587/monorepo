'use client';

import { CountryEntity } from '@graphql';
import Link from 'next/link';
import { ArticleListingFetcher } from '@components';
import { Inline } from '@ui';
import { CountryLabel } from 'src/components/CountryLabel/CountryLabel';

interface Props {
  countries: CountryEntity[];
}

export default ({ countries }: Props) => {
  return (
    <Inline gap="L">
      {countries.map(({ attributes }) => (
        <Link href={`/countries/${attributes?.slug}`}>
          <CountryLabel country={attributes} isInteractive />
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
