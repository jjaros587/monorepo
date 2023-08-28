'use client';

import { Inline, Text } from '@ui';
import { Article } from '@graphql';
import { formatISODate } from 'src/utils/formatDate';

export const ArticleMetadata: React.FC<{ article: Article }> = ({
  article,
}) => {
  return (
    <Inline align="space-between">
      <Inline.Item>
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
