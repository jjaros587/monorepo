import { ArticleCard } from '../../../src/components'
import { Stack } from '@ui'
import { ContentManager } from '../../../lib/ContentManager'

export const ArticleListing: React.FC = () => {
  const posts = new ContentManager().posts.allItems

  return (
    <Stack gap="S">
      {posts.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </Stack>
  )
}
