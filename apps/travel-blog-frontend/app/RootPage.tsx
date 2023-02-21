'use client';

import { ArticleCard } from '@components';
import { ArticleEntity, HomepageEntity } from '@graphql';
import styled from '@theme';
import { Text, Stack, Button, Box } from '@ui';
import { HomePageWallpapers } from 'src/common/HomePageWallpapers/HopePageWallpapers';
import './global.css';

interface Props {
  articles: ArticleEntity[];
  homepage: HomepageEntity;
}

const Container = styled.main`
  min-height: 100vh;
  padding-bottom: 4rem;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled(Stack)`
  position: absolute;
  text-align: center;
  padding-top: 30vh;
`;

export default ({ articles, homepage }: Props) => {
  return (
    <Container>
      <Box fullScreen>
        <HomePageWallpapers homepage={homepage} />
      </Box>
      <Wrapper gap="L">
        <Text variant="display" color="warning">
          {homepage.attributes.title}
        </Text>
        <Text variant="display" color="warning">
          {homepage.attributes.description}
        </Text>
        <Button primary>Start exploring</Button>
      </Wrapper>
      <div className="contentWrapper">
        <Stack gap="S">
          {articles.map(({ attributes }) => (
            <ArticleCard article={attributes} />
          ))}
        </Stack>
      </div>
    </Container>
  );
};
