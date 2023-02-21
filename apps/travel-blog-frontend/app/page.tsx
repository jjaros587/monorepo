import { fetchAPI } from '../lib/api';
import { ArticleEntity, HomepageEntity } from '@graphql';
import RootPage from './RootPage';

async function getArticles() {
  const [articlesRes] = await Promise.all([
    fetchAPI('/articles', { populate: '*' }),
  ]);

  return articlesRes.data;
}

async function getHomepage() {
  const [homepageRes] = await Promise.all([
    fetchAPI('/homepage', { populate: '*' }),
  ]);
  console.log('homepage', homepageRes);

  return homepageRes.data;
}

export default async function Page() {
  const articles: ArticleEntity[] = await getArticles();
  const homepage: HomepageEntity = await getHomepage();

  return <RootPage articles={articles} homepage={homepage} />;
}
