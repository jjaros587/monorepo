import { ArticleCard } from '@components';
import { Stack } from '@ui';
import { getArticles } from 'app/api/getArticles';
import { useEffect, useState } from 'react';
import { ArticleEntity } from '../../graphql';

interface Props {
  filters?: Object;
  articles?: ArticleEntity[];
}

export const ArticleListingFetcher: React.FC<Props> = ({ filters }) => {
  const [{ articles, loading }, setState] = useState<{
    loading: boolean;
    articles: ArticleEntity[];
  }>({
    loading: true,
    articles: [],
  });

  useEffect(() => {
    const fetch = async () => {
      const articles = await getArticles(filters);
      setState({ articles, loading: false });
    };
    fetch();
  }, [filters]);

  if (loading) {
    return <>Loading data</>;
  }

  return <ArticleListing articles={articles} />;
};

export const ArticleListing: React.FC<{ articles: ArticleEntity[] }> = ({
  articles,
}) => {
  return (
    <Stack gap="S">
      {articles.map(({ id, attributes }) => (
        <ArticleCard article={attributes} key={id} />
      ))}
    </Stack>
  );
};
