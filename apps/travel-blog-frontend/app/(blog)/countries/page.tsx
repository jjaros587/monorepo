'use client'

import { Inline } from '@ui'
import { fetchAPI } from '../../../lib/api'
import { ContentManager } from '../../../lib/ContentManager'
import Link from 'next/link'
import { CountryLabel } from '../../../src/components/CountryLabel/CountryLabel'

export async function getCountries() {
  const res = await fetchAPI('/countries', { populate: '*' })
  return res.data
}

export default function Page() {
  const countries = new ContentManager().countries.allItems

  return (
    <Inline gap="L">
      {countries.map((country) => (
        <Link key={country.slug} href={`/countries/${country.slug}`}>
          <CountryLabel country={country} isInteractive />
        </Link>
      ))}
      {/* <ArticleListingFetcher
        filters={{
          country: {
            id: {
              $notNull: true,
            },
          },
        }}
      /> */}
    </Inline>
  )
}
