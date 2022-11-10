"use client";

import { FC } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchPhoto } from "../../src/api/fetchPhoto";
import Loading from "../loading";
import Error from "../error";
import Link from "next/link";
import instagramIcon from "../../src/assets/instagram.png";
import likesIcon from "../../src/assets/likes.png";
import strings from "../../src/constants/strings";

interface IProps {
  id: string;
}

const Details: FC<IProps> = ({ id }) => {
  const { data, isLoading, isError, isRefetching } = useQuery({
    queryKey: ["photo"],
    queryFn: () => fetchPhoto(id),
  });

  if (isLoading || isRefetching) return <Loading />;

  if (isError) return <Error />;

  console.log("after");

  return (
    <div className="my-16">
      <div className="flex mb-4">
        <div className="flex items-center mr-4">
          <Image
            className="mr-2"
            src={likesIcon}
            alt="Likes"
            width={25}
            height={25}
          />
          <p className="text-sm">{data.likes}</p>
        </div>
        {data.user.instagram_username && (
          <Link
            href={`https://www.instagram.com/${data.user.instagram_username}`}
            target="_blank"
          >
            <Image src={instagramIcon} alt="Instagram" width={25} height={25} />
          </Link>
        )}
      </div>
      <p>{`${strings.downloads}: ${data.downloads}`}</p>
      <p>{`${strings.views}: ${data.views}`}</p>
      {data.description && <p>{data.description}</p>}
      <Image
        src={data.urls.regular}
        className="my-8"
        alt="Instagram"
        width={800}
        height={800}
      />
    </div>
  );
};

export default Details;
