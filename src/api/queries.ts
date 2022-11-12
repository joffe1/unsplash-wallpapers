import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getPhotos, getPhoto } from './photosApi';

export const useGetPhotos = (sortValue?: string) => {
  return useInfiniteQuery(
    ['photos', sortValue],
    ({ pageParam = 1 }) => getPhotos(pageParam, sortValue),
    {
      getNextPageParam: (lastPage, pages) => {
        const nextPage = pages.length + 1;
        return lastPage?.length !== 0 ? nextPage : undefined;
      },
    }
  );
};

export const useGetPhoto = (id: string) => {
  return useQuery(['photo', id], () => getPhoto(id));
};
