'use client';

import { useState } from 'react';
import { useGetPhotos } from '../src/api/queries';
import { Title } from '../components';
import { Filter, List, LoadMoreButton } from './components';
import type { IPhoto } from '../src/types';
import strings from '../src/consts/strings';

const Home = () => {
  const [sort, setSort] = useState('');

  const {
    data,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useGetPhotos(sort);

  const photos = data?.pages as IPhoto[][];

  return (
    <main className="mx-auto max-w-screen-xl">
      <Title title={strings.unsplashWallpapers} />
      <Filter setSort={setSort} refetch={refetch} />
      <List data={photos} isLoading={isLoading} isError={isError} />
      <LoadMoreButton
        onClick={() => fetchNextPage()}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </main>
  );
};

export default Home;
