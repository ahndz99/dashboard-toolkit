import React, { createElement, useCallback } from "react";
import CheckboxInput from "./partials/checkbox-input";
import DateInput from "./partials/date-input";
import InputLayout from "./partials/input-layout";
import SelectInput from "./partials/select-input";
import TextAreaInput from "./partials/text-area-input";
import TextInput from "./partials/text-input";
import { FieldsTypes, InputType } from "./types";
import useForm from "./use-form";

type Props = {
  className?: string;
  fields: FieldsTypes;
};

const InputComponent = {
  [InputType.Text]: TextInput,
  [InputType.TextArea]: TextAreaInput,
  [InputType.Checkbox]: CheckboxInput,
  [InputType.Select]: SelectInput,
  [InputType.Date]: DateInput,
};

const Form = ({ className = "", fields }: Props) => {
  const form = useForm(fields);

  const { isTouched, onChange, onBlur, values, errors } = form;

  console.log({ fields });

  return (
    <div className={className}>
      {Object.keys(form.values).map((key) =>
        !!fields[key].custom ? (
          fields[key].custom?.({ name: key, form })
        ) : (
          <>
            <InputLayout label={fields[key].label}>
              {createElement(
                InputComponent[fields[key].type ?? InputType.Text],
                {
                  name: key,
                  value: values[key].toString(),
                  onChange,
                  onBlur,
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
    </div>
  );
};

export default Form;
