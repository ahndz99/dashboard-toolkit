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
      customValidation?: (value: any) => {
        [x: string]: { invalid: boolean; message?: string };
      };
    };
    valueOptions?: {
      label: string;
      value: string;
    };
  };
};

export type FormType = {
  fields: FieldsTypes;
  values: { [x: string]: any };
  setFieldValue: (name: string, value: any) => void;
  errors: { [x: string]: { [x: string]: string } };
  touched: { [x: string]: boolean };
  setFieldTouched: (name: string, value: boolean) => void;
  isTouched: (name: string) => boolean;
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
  handleSubmit?: (e: any) => void;
};

export enum InputType {
  Text = "text",
  TextArea = "textarea",
  Select = "select",
  Date = "date",
  Checkbox = "checkbox",
  Radio = "radio",
}
