'use client';

import { CountryEntity, ArticleEntity } from '@graphql';
import {
  ArticleListing,
  ArticleListingFetcher,
  CountryIcon,
  Markdown,
  PageTitle,
} from '@components';
import { Box, Inline, Text } from '@ui';
import { IconCountryMap } from '@icons';
import Flag, { Flag2 } from 'national-flag-icons';
// import { Container, Row, Col } from 'react-bootstrap';
import Grid from '@mui/material/Grid';

interface Props {
  country: CountryEntity;
}

export default ({ country }: Props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <Box paddingBottom="M">
            <Inline alignY="center" gap="M">
              <CountryIcon code={country.attributes?.code} size="40px" />
              <PageTitle>{country.attributes?.name}</PageTitle>
            </Inline>
          </Box>
          <Markdown markdown={country.attributes?.content} />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Box padding="L" align="center">
            <IconCountryMap name={country.attributes.slug} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Text variant="display">Articles</Text>
          <ArticleListingFetcher
            filters={{
              country: {
                slug: { $eq: country.attributes.slug },
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
