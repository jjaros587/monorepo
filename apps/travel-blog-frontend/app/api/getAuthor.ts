import { WriterEntity } from '@graphql';
import { fetchAPI } from 'lib/api';

export async function getAuthor(id: string): Promise<WriterEntity> {
  const res = await fetchAPI('/writer', {
    filters: {
      email: id,
    },
    populate: '*',
  });

  return res.data;
}
