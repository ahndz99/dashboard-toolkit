import React from "react";
import InputLayout from "./input-layout";

type Props = {
  name: string;
  value: string;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
};

const TextInput = ({ name, value, onChange, onBlur }: Props) => {
  return (
    <input
      className="text-input"
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default TextInput;
