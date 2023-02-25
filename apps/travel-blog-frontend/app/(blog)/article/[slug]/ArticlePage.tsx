'use client';

import { ArticleMetadata, Gallery, Markdown, PageTitle } from '@components';
import { Article } from '@graphql';
import { Box } from '@ui';
import { getStrapiMedia, getStrapiMediaArrayItem } from 'lib/media';
import { MarkdownImage } from 'src/components/Markdown/components/MarkdownImage';

export const ArticlePage: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <>
      <img
        src={getStrapiMedia(article.image)}
        style={{ width: '100%', height: 'auto' }}
      />
      <PageTitle>{article.title}</PageTitle>
      <ArticleMetadata article={article} />
      <Box paddingTop="M">
        <Markdown markdown={article.content} />
      </Box>
      <Gallery
        images={article.gallery.data.map((item) => ({
          src: getStrapiMediaArrayItem(item),
        }))}
      />
    </>
  );
};
