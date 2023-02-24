import React from "react";

type Props = {
  name: string;
  value: string;
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
};

const TextInput = ({ name, value, handleChange, handleBlur }: Props) => {
  return (
    <input
      className="text-input"
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default TextInput;
