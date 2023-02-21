'use client';

import { FC, useState } from 'react';
import { Article } from '@graphql';
import Link from 'next/link';
import { getStrapiMedia } from '../../../lib/media';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Box, Inline, Text } from '@ui';
import { ArticleMetadata } from '../ArticleMetadata/ArticleMetadata';
import styled from '@theme';

const StyledArticleCard = styled(Box)<{ hover: boolean }>`
  height: 250px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid ${({ hover }) => (hover ? '#F4F4F4' : '#333')};
`;

const ImgWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 400px;
  overflow: hidden;
`;

export const ArticleCard: FC<{ article: Article }> = ({ article }) => {
  const { slug, title, image, content } = article;
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/article/${slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyledArticleCard hover={hover}>
        <Inline noWrap>
          <Inline.Item>
            <ImgWrapper>
              <img
                style={{ width: 'auto', height: '300px' }}
                src={getStrapiMedia(image)}
              />
            </ImgWrapper>
          </Inline.Item>
          <Inline.Item flexGrow>
            <Box paddingX="M" paddingY="L">
              <Text variant="display" color={hover ? 'light' : 'basic'}>
                {title}
              </Text>
              <ArticleMetadata article={article} />
              <ReactMarkdown>{content}</ReactMarkdown>
            </Box>
          </Inline.Item>
        </Inline>
      </StyledArticleCard>
    </Link>
  );
};
