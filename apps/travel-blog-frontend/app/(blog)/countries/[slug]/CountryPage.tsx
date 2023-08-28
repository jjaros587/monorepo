'use client';

import { CountryEntity } from '@graphql';
import { ArticleListingFetcher, CountryLabel, Markdown } from '@components';
import { Box, Text } from '@ui';
import { IconCountryMap } from '@icons';
import Flag, { Flag2 } from 'national-flag-icons';
import Grid from '@mui/material/Grid';

interface Props {
  country: CountryEntity;
}

export default ({ country }: Props) => {
  debugger;
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <Box paddingBottom="M">
            <CountryLabel country={country.attributes} size="big" />
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
