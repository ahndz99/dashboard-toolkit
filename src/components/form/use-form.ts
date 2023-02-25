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

  const [errors, setErrors] = useState<{
    [x: string]: { [x: string]: string };
  }>({});

  console.log({ errors });

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
    const newErrors: { [x: string]: { [x: string]: string } } = { ...errors };

    if (!values) {
      return;
    }

    Object.keys(values).forEach((key: string) => {
      const fieldOptions = fields[key].options;

      const value = values?.[key];

      const addOrRemoveFromErrors = (
        name: string,
        isTrue: boolean,
        textError: string
      ) => {
        const error = newErrors[key] ?? [];

        const haveErrorInItem = error[name];

        if (isTrue) {
          if (!haveErrorInItem) {
            newErrors[key] = { ...error, ...{ [name]: textError } };
          }
        } else {
          if (haveErrorInItem) {
            delete errors[key][name];
          }
        }
      };

      if (!!fieldOptions?.mandatory) {
        addOrRemoveFromErrors("mandatory", !value, mandatoryErrorText);
      }

      if (typeof value === "string") {
        if (fieldOptions?.minLength) {
          addOrRemoveFromErrors(
            "minLength",
            value.length < fieldOptions?.minLength,
            minLengthErrorText
          );
        }

        if (fieldOptions?.maxLength) {
          addOrRemoveFromErrors(
            "maxLength",
            value.length > fieldOptions?.maxLength,
            maxLengthErrorText
          );
        }
      }

      if (!!fieldOptions?.customValidation) {
        const validations = fieldOptions?.customValidation(value);
        Object.keys(validations).forEach((key) => {
          const { name, invalid, message } = validations[key];
          addOrRemoveFromErrors(name, invalid, message);
        });
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
