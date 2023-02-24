import React, { createElement, useCallback } from "react";
import CheckboxInput from "./partials/checkbox-input";
import DateInput from "./partials/date-input";
import InputLayout from "./partials/input-layout";
import SelectInput from "./partials/select-input";
import TextAreaInput from "./partials/text-area-input";
import TextInput from "./partials/text-input";
import { FieldsTypes, FormType, InputType } from "./types";
import useForm from "./use-form";

type Props = {
  className?: string;
  fields: FieldsTypes;
  onSubmit: (form: FormType) => void;
};

const InputComponent = {
  [InputType.Text]: TextInput,
  [InputType.TextArea]: TextAreaInput,
  [InputType.Checkbox]: CheckboxInput,
  [InputType.Select]: SelectInput,
  [InputType.Date]: DateInput,
};

const Form = ({ className = "", fields, onSubmit }: Props) => {
  const form = useForm({ fields, onSubmit });

  const { isTouched, handleChange, handleBlur, values, errors, handleSubmit } =
    form;

  console.log({ fields });

  return (
    <div className={className}>
      <form action="" onSubmit={handleSubmit}>
        {Object.keys(form.values).map((key) =>
          !!fields[key].custom ? (
            fields[key].custom?.({ name: key, form })
          ) : (
            <>
              <InputLayout label={fields[key].label ?? ""}>
                {createElement(
                  InputComponent[fields[key].type ?? InputType.Text],
                  {
                    name: key,
                    value: values[key].toString(),
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
