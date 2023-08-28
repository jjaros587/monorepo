'use client';

import { FC, useMemo, useState } from 'react';
import { Article } from '@graphql';
import Link from 'next/link';
import { getStrapiMedia } from '../../../lib/media';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Box, Inline, Text } from '@ui';
import { ArticleMetadata } from '../ArticleMetadata/ArticleMetadata';
import styled from '@theme';
import { Markdown } from '@components';
import Grid from '@mui/material/Grid';

const StyledArticleCard = styled(Box)<{ hover: boolean }>`
  overflow: hidden;
  cursor: pointer;
  border: 1px solid ${({ hover }) => (hover ? '#F4F4F4' : '#333')};
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ArticleCard: FC<{ article: Article }> = ({ article }) => {
  const { slug, title, image, description } = article;
  const [hover, setHover] = useState(false);
  const imageURL = useMemo(() => getStrapiMedia(image), [image]);

  return (
    <Link
      href={`/article/${slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyledArticleCard hover={hover}>
        <Grid container>
          <Grid item xs={12} sm={4} md={4}>
            <Img src={imageURL} />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Box paddingX="M" paddingY="L">
              <Text variant="display" color={hover ? 'light' : 'basic'}>
                {title}
              </Text>
              <ArticleMetadata article={article} />
              <Markdown markdown={description} />
            </Box>
          </Grid>
        </Grid>
      </StyledArticleCard>
    </Link>
  );
};
