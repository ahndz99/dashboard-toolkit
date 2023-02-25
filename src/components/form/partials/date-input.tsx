import React, { useMemo } from "react";

type Props = {
  name: string;
  value: string;
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
};

const DateInput = ({ name, value, handleChange, handleBlur }: Props) => {
  const date = useMemo(() => {
    try {
      return new Date(value).toISOString().split("T")[0];
    } catch (error) {
      return value;
    }
  }, [value]);

  return (
    <input
      className="text-input"
      type="date"
      name={name}
      value={date}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default DateInput;
