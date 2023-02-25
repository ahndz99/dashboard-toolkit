import React, { useCallback, useEffect, useState } from "react";
import { FieldsTypes, FormType } from "./types";

const minLengthErrorText = "This field should be larger";
const maxLengthErrorText = "This field should be shorter";
const mandatoryErrorText = "This field is mandatory";

type Props = {
  fields: FieldsTypes;
  onSubmit: (form: FormType) => void;
};

const useForm = ({ fields, onSubmit }: Props): FormType => {
  const [values, setValues] = useState<{
    [x: string]: any;
  }>({});

  const setFieldValue = (name: string, value: any) => {
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState<{ [x: string]: string[] }>({});

  const setFieldError = (name: string, value: string[]) => {
    setErrors((errors) => ({
      ...errors,
      [name]: value,
    }));
  };

  const [touched, setTouched] = useState<{ [x: string]: boolean }>({});

  const setFieldTouched = (name: string, value: boolean) => {
    setTouched((touched) => ({
      ...touched,
      [name]: value,
    }));
  };

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
            if (newErrors[key].length === 0) {
              delete newErrors[key];
            }
          }
        }
      };

      if (!!fieldOptions?.mandatory) {
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
    const { name, value, type, checked } = e.target;

    let currValue = value;

    if (type === "checkbox") {
      currValue = checked;
    }

    if (type === "date") {
      currValue = new Date(value);
    }

    setValues((values) => ({
      ...values,
      [name]: currValue,
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
    console.log(errors);
    if (Object.keys(errors).length > 0) {
      setTouched(
        Object.keys(values)
          .map((key: string) => ({ [key]: true }))
          .reduce((acc, curr) => ({ ...acc, ...curr }), {})
      );
      return;
    }

    onSubmit({
      values,
      setFieldValue,
      errors,
      setFieldError,
      touched,
      setFieldTouched,
      isTouched,
      handleChange,
      handleBlur,
      fields,
    });
  };

  return {
    values,
    setFieldValue,
    errors,
    setFieldError,
    touched,
    setFieldTouched,
    isTouched,
    handleChange,
    handleBlur,
    fields,
    handleSubmit,
  };
};

export default useForm;
