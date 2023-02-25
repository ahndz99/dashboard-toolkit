import React from "react";

type Props = {
  name: string;
  value: string;
  options: {
    value: string;
    label: string;
  }[];
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
};

const SelectInput = ({
  name,
  value,
  options,
  handleChange,
  handleBlur,
}: Props) => {
  return (
    <>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  );
};

export default SelectInput;
