'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { MeiliSearch } from 'meilisearch';
import { ArticleCard, ArticleListing } from '@components';
import { Article } from '@graphql';

export default function Page() {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get('search');
  const [{ articles, loading }, setSearchState] = useState<{
    loading: boolean;
    articles: Article[];
  }>({
    articles: [],
    loading: true,
  });

  const client = useMemo(
    () =>
      new MeiliSearch({
        host: 'http://127.0.0.1:7700',
        apiKey: 'masterKey',
      }),
    []
  );

  useEffect(() => {
    const search = async () => {
      const response = await client.index('article').search(searchValue, {
        hitsPerPage: 15,
        
      });
      setSearchState({ loading: false, articles: response.hits as Article[] });
      debugger;
    };
    search();
  }, [searchValue]);

  return (
    <>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </>
  );
}
