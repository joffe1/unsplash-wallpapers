"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFetchPhotos } from "../../src/api/fetchPhotos";
import Loading from "../loading";
import Error from "../error";
import type { IPhoto } from "../../src/types";
import instagramIcon from "../../src/assets/instagram.png";
import likesIcon from "../../src/assets/likes.png";
import strings from "../../src/constants/strings";

const PhotosList = () => {
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("");

  const { data, isLoading, isError } = useFetchPhotos(page, orderBy);

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
        {data?.map((item: IPhoto) => (
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
      </div>
    </div>
  );
};

export default PhotosList;
