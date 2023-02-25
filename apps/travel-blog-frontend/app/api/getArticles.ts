import { fetchAPI } from 'lib/api';

export async function getArticles(filters: Object) {
  const [articlesRes] = await Promise.all([
    fetchAPI('/articles', { filters, populate: '*' }),
  ]);

  return articlesRes.data;
}
