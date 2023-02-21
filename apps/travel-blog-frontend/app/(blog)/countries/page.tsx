import { fetchAPI } from 'lib/api';
import CountriesPage from './CountriesPage';

export async function getCountries() {
  const res = await fetchAPI('/countries', { populate: '*' });
  return res.data;
}

export default async function Page() {
  const countries = await getCountries();

  return <CountriesPage countries={countries} />;
}
