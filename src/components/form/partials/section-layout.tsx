import React, { createElement, ReactNode } from "react";
import { DateInput } from "../form.stories";
import { FieldsTypes, FormType, InputType } from "../types";
import CheckboxInput from "./checkbox-input";
import InputLayout from "./input-layout";
import RadioInput from "./radio-input";
import SelectInput from "./select-input";
import TextAreaInput from "./text-area-input";
import TextInput from "./text-input";

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

const SectionLayout = ({ children, title, subtitle }: Props) => {
  return (
    <div className="section-form">
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      <div>{children}</div>
    </div>
  );
};

export default SectionLayout;
