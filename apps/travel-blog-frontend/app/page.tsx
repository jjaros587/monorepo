import { fetchAPI } from '../lib/api';
import { HomepageEntity } from '@graphql';
import RootPage from './RootPage';

async function getHomepage() {
  const [homepageRes] = await Promise.all([
    fetchAPI('/homepage', { populate: '*' }),
  ]);
  console.log('homepage', homepageRes);

  return homepageRes.data;
}

export default async function Page() {
  const homepage: HomepageEntity = await getHomepage();

  return <RootPage homepage={homepage} />;
}
