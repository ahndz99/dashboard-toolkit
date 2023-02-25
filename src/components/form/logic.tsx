import React, { createElement, useMemo } from "react";
import CheckboxInput from "./partials/checkbox-input";
import DateInput from "./partials/date-input";
import InputLayout from "./partials/input-layout";
import RadioInput from "./partials/radio-input";
import SectionLayout from "./partials/section-layout";
import SelectInput from "./partials/select-input";
import TextAreaInput from "./partials/text-area-input";
import TextInput from "./partials/text-input";

import { FieldsTypes, FormType, InputType } from "./types";
import useForm from "./use-form";

type Props = {
  className?: string;
  fields: FieldsTypes;
  sections: {
    title: string;
    subtitle: string;
    fields: string[];
  }[];
  onSubmit: (form: FormType) => void;
};

const Form = ({ className = "", fields, sections, onSubmit }: Props) => {
  console.log({ fields, sections });

  const form = useForm({ fields, onSubmit });

  const { handleSubmit, values, errors, handleBlur, handleChange, isTouched } =
    form;

  const sectionValues = useMemo(
    () =>
      sections.map((section) => ({
        ...section,
        fields: section.fields
          .map((key: string) => {
            return { [key]: fields[key] };
          })
          .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
      })),
    [sections, fields]
  );

  const InputComponent = {
    [InputType.Text]: TextInput,
    [InputType.TextArea]: TextAreaInput,
    [InputType.Checkbox]: CheckboxInput,
    [InputType.Select]: SelectInput,
    [InputType.Date]: DateInput,
    [InputType.Radio]: RadioInput,
  };

  return (
    <div className={className}>
      <form action="" onSubmit={handleSubmit}>
        {sectionValues.map((section) => (
          <SectionLayout title={section.title} subtitle={section?.subtitle}>
            {Object.keys(values)
              .filter((key) => section.fields[key])
              .map((key) =>
                !!section.fields[key]?.custom ? (
                  section.fields[key].custom?.({ name: key, form })
                ) : (
                  <>
                    <InputLayout label={section.fields[key].label ?? ""}>
                      {createElement(
                        InputComponent[
                          section.fields[key].type ?? InputType.Text
                        ],
                        {
                          name: key,
                          value: values[key].toString(),
                          options: section.fields[key]?.valueOptions,
                          handleChange,
                          handleBlur,
                        }
                      )}
                      {isTouched(key) && (
                        <div className="errors">
                          {(errors[key] ?? []).map((error) => (
                            <span className="error">{error}</span>
                          ))}
                        </div>
                      )}
                    </InputLayout>
                  </>
                )
              )}
          </SectionLayout>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
