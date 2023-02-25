import { fetchAPI } from 'lib/api';
import { ArticleEntity, CountryEntity } from '@graphql';
import CountryPage from './CountryPage';

export const getCountry = async (slug: string) => {
  const countryRes = await fetchAPI('/countries', {
    filters: {
      slug,
    },
    populate: '*',
  });

  return countryRes.data[0];
};

async function getArticles(country: string) {
  const [articlesRes] = await Promise.all([
    fetchAPI('/articles', {
      filters: {
        country: {
          slug: { $eq: country },
        },
      },
      populate: '*',
    }),
  ]);

  return articlesRes.data;
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const country: CountryEntity = await getCountry(slug);
  const articles: ArticleEntity[] = await getArticles(slug);

  return <CountryPage country={country} />;
}
