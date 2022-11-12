'use client';

import { FC, ChangeEvent } from 'react';
import { sortValues } from '../../src/consts/sortValues';
import { Select } from '../../components';
import strings from '../../src/consts/strings';

interface IProps {
  setSort: (value: string) => void;
  refetch: () => void;
}

const Filter: FC<IProps> = ({ setSort, refetch }) => {
  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setSort(value);
    refetch();
  };

  return (
    <div className="flex justify-end">
      <div className="flex max-w-sm gap-4">
        <Select
          label={`${strings.sort}:`}
          options={sortValues}
          onChange={handleSort}
        />
      </div>
    </div>
  );
};

export default Filter;
