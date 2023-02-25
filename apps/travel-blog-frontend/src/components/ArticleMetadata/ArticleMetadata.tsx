'use client';

import { Inline, Text } from '@ui';
import { Article, WriterEntity } from '@graphql';
import { formatISODate } from 'src/utils/formatDate';
import { useEffect, useState } from 'react';
import { getAuthor } from 'app/api/getAuthor';
import { getStrapiMedia } from 'lib/media';

export const ArticleMetadata: React.FC<{ article: Article }> = ({
  article,
}) => {
  const [author, setAuthor] = useState<WriterEntity>(null);

  useEffect(() => {
    const fetch = async () => {
      const author = await getAuthor(article.author.data.attributes.email);
      setAuthor(author);
    };
    fetch();
  }, [article.author.data.attributes.email]);

  return (
    <Inline align="space-between">
      <Inline.Item>
        {author && <img src={getStrapiMedia(author.attributes.picture)} />}
        <Text variant="caption">{article.author.data.attributes?.name}</Text>
      </Inline.Item>
      <Inline.Item>
        <Text variant="caption">
          {formatISODate(article.publishedAt, 'MMM d, yyyy')}
        </Text>
      </Inline.Item>
    </Inline>
  );
};
