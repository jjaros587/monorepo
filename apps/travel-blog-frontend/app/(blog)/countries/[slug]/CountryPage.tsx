'use client';

import { CountryEntity, ArticleEntity } from '@graphql';
import { ArticleCard, CountryIcon, PageTitle } from '@components';
import ReactMarkdown from 'react-markdown';
import { Box, Inline, Text } from '@ui';
import { IconCountryMap } from '@icons';
import Flag, { Flag2 } from 'national-flag-icons';

interface Props {
  country: CountryEntity;
  articles: ArticleEntity[];
}

export default ({ country, articles }: Props) => {
  return (
    <>
      <Inline alignY="flex-start " gap="M" noWrap>
        <Inline.Item flexGrow>
          <Box paddingBottom="M">
            <Inline alignY="center" gap="M">
              {/* <Flag2 flagCode="us" height={25} /> */}

              <CountryIcon code={country.attributes?.code} size="40px" />
              <PageTitle>{country.attributes?.name}</PageTitle>
            </Inline>
          </Box>
          <ReactMarkdown>{country.attributes?.content}</ReactMarkdown>
        </Inline.Item>

        <Inline.Item>
          <Box padding="L">
            <IconCountryMap name={country.attributes.slug} />
          </Box>
        </Inline.Item>
      </Inline>

      <Text variant="display">Articles</Text>
      {articles.map(({ attributes }) => (
        <div style={{ marginBottom: '5px' }}>
          <ArticleCard article={attributes} />
        </div>
      ))}
    </>
  );
};
