import React from "react";

import Form, { useForm } from ".";
import { FormType } from "./types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Form",
  component: Form,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <div>
      <h1>Form</h1>
      <Form fields={args.fields} onSubmit={args.onSubmit} />
    </div>
  );
};

const CustomInput = ({ name, form }: { name: string; form: FormType }) => {
  const { values, errors, handleChange, handleBlur } = form;

  return (
    <div>
      <input
        type="checkbox"
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className="errors">
        {(errors[name] ?? []).map((error) => (
          <span className="error">{error}</span>
        ))}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSubmit: (form: any) => {
    console.log(form);
  },
  fields: {
    hola: {
      value: "hola a ti",
      label: "This is the label",
      type: "text",
      options: {
        maxLength: 10,
        minLength: 2,
        mandatory: true,
      },
    },
    adios: {
      value: "hola a ti",
      label: "This is the label",
      type: "text",
      options: {
        maxLength: 10,
        minLength: 2,
        mandatory: true,
      },
    },
    nombre: {
      value: false,
      custom: CustomInput,
      options: {
        maxLength: 10,
        minLength: 2,
        mandatory: true,
      },
    },
    aceptarCondiciones: {
      value: false,
      label: "This is the label",
      type: "checkbox",
      options: {
        maxLength: 10,
        minLength: 2,
        mandatory: true,
      },
    },
  },
};

export const TextInput = Template.bind({});
TextInput.args = {
  onSubmit: (form: any) => {
    console.log(form);
  },
  fields: {
    hola: {
      value: "hola a ti",
      label: "This is the label",
      type: "text",
      options: {
        maxLength: 10,
        minLength: 2,
        mandatory: true,
      },
    },
  },
};

export const CheckboxInput = Template.bind({});
CheckboxInput.args = {
  onSubmit: (form: any) => {
    console.log(form);
  },
  fields: {
    hola: {
      value: "hola a ti",
      label: "This is the label",
      type: "checkbox",
      options: {
        maxLength: 10,
        minLength: 2,
        mandatory: true,
      },
    },
  },
};

const d = new Date();
d.setDate(d.getDate() - 5);

export const DateInput = Template.bind({});
DateInput.args = {
  onSubmit: (form: any) => {
    console.log(form);
  },
  fields: {
    hola: {
      value: d,
      label: "This is the label",
      type: "date",
      options: {
        mandatory: true,
      },
    },
  },
};
