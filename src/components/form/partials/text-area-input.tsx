import React from "react";

type Props = {
  name: string;
  value: string;
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
};

const TextAreaInput = ({ name, value, handleChange, handleBlur }: Props) => {
  return (
    <textarea
      className="text-input"
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
    >
      {value}
    </textarea>
  );
};

export default TextAreaInput;
