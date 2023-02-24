import React, { useCallback, useEffect, useState } from "react";
import { FieldsTypes, FormType } from "./types";

const minLengthErrorText = "This text should be larger";
const maxLengthErrorText = "This text should be shorter";
const mandatoryErrorText = "This text is mandatory";

type Props = {
  fields: FieldsTypes;
  onSubmit: (form: FormType) => void;
};

const useForm = ({ fields, onSubmit }: Props): FormType => {
  const [values, setValues] = useState<{
    [x: string]: string | boolean | number;
  }>({});

  const [errors, setErrors] = useState<{ [x: string]: string[] }>({});

  const [touched, setTouched] = useState<{ [x: string]: boolean }>({});

  useEffect(() => {
    setValues(
      Object.keys(fields)
        .map((key: string) => {
          return { [key]: fields[key].value ?? "" };
        })
        .reduce((acc, curr) => ({ ...acc, ...curr }), {})
    );
  }, [fields]);

  useEffect(() => {
    const newErrors: { [x: string]: string[] } = { ...errors };

    if (!values) {
      return;
    }

    Object.keys(values).forEach((key: string) => {
      const fieldOptions = fields[key].options;

      const value = values?.[key];

      const addOrRemoveFromErrors = (isTrue: boolean, textError: string) => {
        const error = newErrors[key] ?? [];

        const haveItemInArray = error.some(
          (errorItem) => errorItem === textError
        );

        if (isTrue) {
          if (!haveItemInArray) {
            newErrors[key] = [...error, textError];
          }
        } else {
          if (haveItemInArray) {
            newErrors[key] = errors[key].filter(
              (errorItem) => errorItem !== textError
            );
          }
        }
      };

      if (!!fieldOptions?.mandatory) {
        console.log("entra 1");
        addOrRemoveFromErrors(!value, mandatoryErrorText);
      }

      if (typeof value === "string") {
        if (fieldOptions?.minLength) {
          addOrRemoveFromErrors(
            value.length < fieldOptions?.minLength,
            minLengthErrorText
          );
        }

        if (fieldOptions?.maxLength) {
          addOrRemoveFromErrors(
            value.length > fieldOptions?.maxLength,
            maxLengthErrorText
          );
        }
      }

      setErrors(newErrors);
    });
  }, [values]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleBlur = (e: any) => {
    const { name, value } = e.target;

    setTouched((touched) => ({
      ...touched,
      [name]: true,
    }));
  };

  const isTouched = useCallback(
    (name: string): boolean => !!touched[name],
    [touched]
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({
      values,
      setValues,
      errors,
      setErrors,
      touched,
      setTouched,
      isTouched,
      handleChange,
      handleBlur,
      fields,
    });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    touched,
    setTouched,
    isTouched,
    handleChange,
    handleBlur,
    fields,
    handleSubmit,
  };
};

export default useForm;
