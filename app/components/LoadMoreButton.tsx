"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getPhotos } from "../../src/api/photosApi";
import { Button } from "../../components";
import strings from "../../src/consts/strings";

const LoadMoreButton = () => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["photos"],
    getPhotos,
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.length !== 0 ? nextPage : undefined;
      },
    }
  );

  return (
    <div className="my-16 mx-16 text-center">
      <Button
        title={strings.loadMore}
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      />
    </div>
  );
};

export default LoadMoreButton;
