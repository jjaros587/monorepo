'use client'

import { ContentManager } from '../../../../lib/ContentManager'
import { Box } from '@ui'
import { ArticleMetadata, Gallery, Markdown, PageTitle } from '../../../../src/components'

export default function Page({ params: { slug } }: { params: { slug: string } }) {
  const post = new ContentManager().posts.getBySlug(slug)

  return (
    <>
      {/* <img src={getStrapiMedia(article.image)} style={{ width: '100%', height: 'auto' }} /> */}
      <PageTitle>{post.title}</PageTitle>
      {/* <ArticleMetadata article={post} /> */}
      <Box paddingTop="M">
        <Markdown markdown={post.body.raw} />
      </Box>
      {/* <Gallery
        images={article.gallery.data?.map((item) => ({
          src: getStrapiMediaArrayItem(item),
        }))}
      /> */}
    </>
  )
}
