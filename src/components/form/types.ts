import { Dispatch, FunctionComponent, ReactNode, SetStateAction } from "react";

export type FieldsTypes = {
  [x: string]: {
    custom?: FunctionComponent<{ name: string; form: FormType }>;
    label?: string;
    value?: string | boolean | number;
    type?: InputType;
    options?: {
      maxLength?: number;
      minLength?: number;
      mandatory?: boolean;
    };
  };
};

export type FormType = {
  fields: FieldsTypes;
  values: { [x: string]: string | boolean | number };
  setValues: Dispatch<
    SetStateAction<{ [x: string]: string | boolean | number }>
  >;
  errors: { [x: string]: string[] };
  setErrors: Dispatch<SetStateAction<{ [x: string]: string[] }>>;
  touched: { [x: string]: boolean };
  setTouched: Dispatch<SetStateAction<{ [x: string]: boolean }>>;
  isTouched: (name: string) => boolean;
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
  handleSubmit?: (e: any) => void;
};

export enum InputType {
  Text = "text",
  TextArea = "TextArea",
  Select = "select",
  Date = "date",
  Checkbox = "checkbox",
}
