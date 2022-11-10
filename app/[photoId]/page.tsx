"use client";

import Link from "next/link";
import Details from "./Details";
import strings from "../../src/constants/strings";

interface IParams {
  photoId: string;
}

const PhotoDetails = ({ params }: { params: IParams }) => {
  const photoId = params.photoId;

  return (
    <div className="my-5 mx-auto max-w-screen-xl">
      <h1 className="text-4xl font-bold my-8">Details</h1>
      <Link href="/">{`< ${strings.goBack}`}</Link>
      <Details id={photoId} />
    </div>
  );
};

export default PhotoDetails;
