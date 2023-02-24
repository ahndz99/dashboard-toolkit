import React from "react";

type Props = {
  name: string;
  value: string;
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
};

const CheckboxInput = ({ name, value, handleChange, handleBlur }: Props) => {
  return (
    <input
      className="checkbox-input"
      type="checkbox"
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default CheckboxInput;
