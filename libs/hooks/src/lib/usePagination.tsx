import { useState } from 'react';

const aaa = await strapi.entityService.findOne('api::article.article', 1, {
  populate: { someRelation: true },
});

export const usePagination = (
  callback: () => {},
  size?: number,
  number?: number
) => {
  const [pageNumber, setPageNumber] = useState(number || 1);
  const [additionalPages, setAdditionalPage] = useState(0);
  const [limit, setLimit] = useState(size || 10);
  const [order, setOrder] = useState<OrderArgs | undefined>({
    orderBy: 'date',
    orderDirection: OrderDirection.Desc,
  });
  const [filter, setFilter] = useState([]);

  const skip = useMemo(() => {
    return (pageNumber + additionalPages - 1) * limit;
  }, [pageNumber, limit, additionalPages]);

  const reset = useCallback(() => {
    setAdditionalPage(0);
    setPageNumber(1);
    setFilter([]);
    setOrder(undefined);
  }, []);

  const reload = useCallback(() => {
    setAdditionalPage(0);
    setPageNumber(1);
  }, []);

  return {
    pagination: {
      pageSize: limit,
      pageNumber,
      additionalPages,
      loadMore: () => setAdditionalPage(additionalPages + 1),
      setPageSize: (limit: number) => setLimit(limit),
      setPage: (pageNumber: number) => {
        setPageNumber(pageNumber);
        setAdditionalPage(0);
      },
      setNextPage: () => {
        setPageNumber(pageNumber + additionalPages + 1);
        setAdditionalPage(0);
      },
      setPreviousPage: () => {
        setPageNumber(pageNumber - 1);
        setAdditionalPage(0);
      },
    },
  };
};
