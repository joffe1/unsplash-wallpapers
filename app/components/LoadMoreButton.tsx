'use client';

import { FC } from 'react';
import { Button } from '../../components';
import strings from '../../src/consts/strings';

interface IProps {
  onClick: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
}

const LoadMoreButton: FC<IProps> = ({
  onClick,
  hasNextPage,
  isFetchingNextPage,
}) => {
  return (
    <div className="my-16 mx-16 text-center">
      <Button
        title={strings.loadMore}
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={onClick}
      />
    </div>
  );
};

export default LoadMoreButton;
