import { FC } from "react";

interface IProps {
  title: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<IProps> = ({ title, disabled, onClick }) => {
  return (
    <button
      type="button"
      className="rounded bg-blue-500 py-2 px-4 text-center font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
