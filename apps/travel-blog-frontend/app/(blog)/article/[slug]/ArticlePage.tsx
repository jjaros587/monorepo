'use client';

import { ArticleMetadata, PageTitle } from '@components';
import { Article } from '@graphql';
import ReactMarkdown from 'react-markdown';

export const ArticlePage: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <>
      <PageTitle>{article.title}</PageTitle>
      <ArticleMetadata article={article} />
      <ReactMarkdown skipHtml>{article.content}</ReactMarkdown>
    </>
  );
};
