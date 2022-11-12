import { useInfiniteQuery } from '@tanstack/react-query';
import { getPhotos } from './photosApi';

export const useGetPhotos = (sortValue?: string) => {
  return useInfiniteQuery(
    ['photos', sortValue],
    ({ pageParam = 1 }) => getPhotos(pageParam, sortValue),
    {
      getNextPageParam: (lastPage, pages) => {
        const nextPage = pages.length + 1;
        return lastPage.length !== 0 ? nextPage : undefined;
      },
    }
  );
};
