'use client'

import { ContentManager } from '../../../../lib/ContentManager'

import { CountryLabel, Markdown } from '../../../../src/components'
import { Box, Text } from '@ui'
import { IconCountryMap } from '@icons'
import Flag, { Flag2 } from 'national-flag-icons'
import Grid from '@mui/material/Grid'

export default function Page({ params: { slug } }: { params: { slug: string } }) {
  const country = new ContentManager().countries.getBySlug(slug)
  // const articles = new ContentManager().posts.getFilteredItems((item) => item.country === )

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <Box paddingBottom="M">
            <CountryLabel country={country} size="big" />
          </Box>
          <Markdown markdown={country.body.raw} />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Box padding="L" align="center">
            {/* <IconCountryMap name={country.slug} /> */}
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Text variant="display">Articles</Text>
          {/* <ArticleListingFetcher
            filters={{
              country: {
                slug: { $eq: country.attributes.slug },
              },
            }}
          /> */}
        </Grid>
      </Grid>
    </>
  )
}
