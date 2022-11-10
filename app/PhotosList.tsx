"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPhotos } from "../src/api/fetchPhotos";
import instagramIcon from "../src/assets/instagram.png";
import likesIcon from "../src/assets/likes.png";
import type { IPhoto } from "../src/types";
import Loading from "./loading";
import Error from "./error";
import strings from "../src/constants/strings";

const PhotosList = () => {
  const [orderBy, setOrderBy] = useState("");

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage) {
        return pages.length + 1;
      }
    },
  });

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
        {data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.map((item: IPhoto) => (
              <div key={item.id}>
                <Link href={item.id} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      className="object-cover h-48 w-96 object-center group-hover:opacity-75"
                      src={item.urls.small}
                      alt={item.id}
                      width={500}
                      height={500}
                    />
                  </div>
                </Link>
                <div className="bg-slate-100 p-4">
                  <h3 className="mb-3 text-sm text-gray-700">{`${strings.author}: ${item.user.name}`}</h3>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <Image
                        className="mr-2"
                        src={likesIcon}
                        alt="Likes"
                        width={25}
                        height={25}
                      />
                      <p className="text-sm">{item.likes}</p>
                    </div>
                    {item.user.instagram_username && (
                      <Link
                        href={`https://www.instagram.com/${item.user.instagram_username}`}
                        target="_blank"
                      >
                        <Image
                          src={instagramIcon}
                          alt="Instagram"
                          width={25}
                          height={25}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
      <div className="my-16 mx-16 text-center">
        <button
          type="submit"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="inline-flex justify-center rounded border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          {strings.loadMore}
        </button>
      </div>
    </div>
  );
};

export default PhotosList;
