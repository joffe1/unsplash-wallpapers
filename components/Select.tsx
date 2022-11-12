import { FC, ChangeEvent } from 'react';

interface IProps {
  label: string;
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<IProps> = ({ label, options, onChange }) => {
  return (
    <select onChange={onChange} className="mx-8 cursor-pointer">
      <option value="">{label}</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
