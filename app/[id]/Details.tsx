import { FC } from 'react';
import Image from 'next/image';
import Loading from '../loading';
import Error from '../error';
import type { IPhoto } from '../../src/types';
import strings from '../../src/consts/strings';

interface IProps {
  data: IPhoto;
  isLoading: boolean;
  isRefetching: boolean;
  isError: boolean;
}

const Details: FC<IProps> = ({ data, isLoading, isRefetching, isError }) => {
  if (isLoading || isRefetching) return <Loading />;

  if (isError) return <Error />;

  return (
    <div className="my-8">
      <p>{`${strings.downloads}: ${data.downloads}`}</p>
      <p>{`${strings.views}: ${data.views}`}</p>
      {data.description && <p className="font-bold">{data.description}</p>}
      <Image
        src={data.urls.regular}
        alt="photo"
        className="my-8"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Details;
