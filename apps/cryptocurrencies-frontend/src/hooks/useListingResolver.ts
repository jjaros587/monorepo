import { Pagination } from '../ui-kit';
import { useState, useCallback, useMemo } from 'react';
import { OrderArgs, OrderDirection } from '../graphql';

interface ListingResolver {
  pagination: Pagination;
  args: {
    skip: number;
    limit: number;
    order: OrderArgs | undefined;
    filter: unknown; // TODO
  };
  resolver: {
    reset: () => void;
    reload: () => void;
    setOrder: (order: OrderArgs) => void;
  };
}

export const useListingResolver = (
  size?: number,
  number?: number
): ListingResolver => {
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
    resolver: {
      reset,
      reload,
      setOrder: (order: OrderArgs) => {
        setOrder(order);
        setAdditionalPage(0);
      },
    },
    args: {
      skip,
      limit,
      order,
      filter,
    },
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
