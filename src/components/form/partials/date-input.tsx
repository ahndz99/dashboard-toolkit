import React from "react";

type Props = {
  name: string;
  value: string;
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
};

const TextInput = ({ name, value, handleChange, handleBlur }: Props) => {
  console.log({ value });
  return (
    <input
      className="text-input"
      type="date"
      name={name}
      value={new Date(value).toISOString().split("T")[0]}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default TextInput;
