import { fetchAPI } from 'lib/api';
import { ArticleEntity } from '@graphql';
import { ArticlePage } from './ArticlePage';

export const getArticle = async (slug: string) => {
  const countryRes = await fetchAPI('/articles', {
    filters: {
      slug,
    },
    populate: '*',
  });

  return countryRes.data[0];
};

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const article: ArticleEntity = await getArticle(slug);

  return <ArticlePage article={article.attributes} />;
}
