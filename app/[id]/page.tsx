'use client';

import Link from 'next/link';
import { useGetPhoto } from '../../src/api/queries';
import { Title } from '../../components';
import Details from './Details';
import strings from '../../src/consts/strings';

interface IParams {
  id: string;
}

const PhotoDetails = ({ params }: { params: IParams }) => {
  const photoId = params.id;

  const { data, isLoading, isRefetching, isError } = useGetPhoto(photoId);

  return (
    <main className="mx-auto max-w-screen-xl">
      <Title title={strings.photoDetails} />
      <Link href="/">{`< ${strings.goBack}`}</Link>
      <Details
        data={data?.data!}
        isLoading={isLoading}
        isRefetching={isRefetching}
        isError={isError}
      />
    </main>
  );
};

export default PhotoDetails;
