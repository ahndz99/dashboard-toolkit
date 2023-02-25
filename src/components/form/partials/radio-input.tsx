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

const RadioInput = ({
  name,
  value,
  options,
  handleChange,
  handleBlur,
}: Props) => {
  return (
    <>
      {options.map((option, index) => (
        <>
          <input
            className="radio-input"
            type="radio"
            name={name}
            id={name + index}
            value={option.value}
            checked={option.value === value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor={name + index}>{option.label}</label>
        </>
      ))}
    </>
  );
};

export default RadioInput;
