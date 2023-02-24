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
  values: { [x: string]: any };
  setFieldValue: (name: string, value: any) => void;
  errors: { [x: string]: string[] };
  setFieldError: (name: string, value: string[]) => void;
  touched: { [x: string]: boolean };
  setFieldTouched: (name: string, value: boolean) => void;
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
