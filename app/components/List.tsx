'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '../loading';
import Error from '../error';
import type { IPhoto } from '../../src/types';
import strings from '../../src/consts/strings';

interface IProps {
  data: IPhoto[][];
  isLoading: boolean;
  isError: boolean;
}

const List: FC<IProps> = ({ data, isLoading, isError }) => {
  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  console.log('data :>> ', data);

  return (
    <div className="mt-8 mb-16 grid grid-cols-5 gap-6">
      {data &&
        data.map((page: IPhoto[]) =>
          page.map((item: IPhoto) => (
            <Link href={item.id} className="group relative" key={item.id}>
              <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                <Image
                  className="h-48 w-96 object-cover object-center group-hover:opacity-75"
                  src={item.urls.small}
                  alt={item.id}
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  fill
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-500">
                <span className="absolute inset-0"></span>
                {`${strings.author}: ${item.user.name}`}
              </h3>
            </Link>
          ))
        )}
    </div>
  );
};

export default List;
