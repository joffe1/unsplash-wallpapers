import { FC } from "react";

interface IProps {
  title: string;
}

const Title: FC<IProps> = ({ title }) => {
  return (
    <h1 className="my-8 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
      {title}
    </h1>
  );
};

export default Title;
