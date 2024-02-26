'use client'

import { Inline, Text } from '@ui'
import { formatISODate } from '../../utils/formatDate'
import { Post } from '@contentlayer/generated'

export const ArticleMetadata: React.FC<{ article: Post }> = ({ article }) => {
  return null
  return (
    <Inline align="space-between">
      <Inline.Item>
        <Text variant="caption">{article.author.data.attributes?.name}</Text>
      </Inline.Item>
      <Inline.Item>
        <Text variant="caption">{formatISODate(article.publishedAt, 'MMM d, yyyy')}</Text>
      </Inline.Item>
    </Inline>
  )
}
