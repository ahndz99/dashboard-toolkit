import React, { ReactNode, useEffect, useState } from "react";

export enum FieldType {
  Text = "text",
  Select = "select",
  Array = "array",
  Date = "date",
  Checkbox = "checkbox",
}

type Props = {
  className?: string;
  fields: {
    name: string;
    type: FieldType;
    options?: {
      maxLength: number;
      minLenght: number;
      mandatory: boolean;
    };
  }[];
};

const Form = ({ className = "" }: Props) => {
  const [form, setForm] = useState({
    values: {},
    errors: {},
  });

  useEffect(() => {
    // Check if there are errors
  }, [form.values]);

  return <div className={className}></div>;
};

export default Form;
