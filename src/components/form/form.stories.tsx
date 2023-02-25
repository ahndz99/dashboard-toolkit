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
      <Form
        fields={args.fields}
        sections={args.sections}
        onSubmit={args.onSubmit}
      />
    </div>
  );
};

const onSubmit = (form: any) => {
  alert(JSON.stringify(form, null, 4));
};

const CustomInput = ({ name, form }: { name: string; form: FormType }) => {
  const { errors, handleChange, handleBlur, isTouched } = form;

  return (
    <div>
      <label htmlFor="">Custom input</label>
      <input
        type="checkbox"
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className="errors">
        {isTouched(name) &&
          (errors[name] ?? []).map((error) => (
            <span className="error">{error}</span>
          ))}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSubmit,
  sections: [
    {
      title: "Section 1",
      subtitle: "Section subtitle",
      fields: ["text", "date"],
    },
    {
      title: "Section 2",
      subtitle: "Section 2 subtitle",
      fields: ["text2", "textarea"],
    },
    {
      title: "Section 3",
      subtitle: "Section 3 subtitle",
      fields: ["custom"],
    },
    {
      title: "Section 4",
      subtitle: "Section 4 subtitle",
      fields: ["checkbox"],
    },
  ],
  fields: {
    text: {
      value: "hola a ti",
      label: "This is the label",
      type: "text",
      options: {
        maxLength: 10,
        minLength: 2,
        mandatory: true,
        customValidation: (value: any) => {
          let errors = {};
          if (value === "hola") {
            errors = {
              ...errors,
              name: "hola",
              invalid: false,
            };
          } else {
            errors = {
              ...errors,
              name: "hola",
              invalid: true,
              message: "El texto debe decir hola",
            };
          }
          return errors;
        },
      },
    },
    date: {
      value: null,
      label: "This is the label",
      type: "date",
      options: {
        mandatory: true,
      },
    },
    text2: {
      value: "hola a ti",
      label: "This is the label",
      type: "text",
      options: {
        maxLength: 10,
        minLength: 2,
        mandatory: true,
      },
    },
    textarea: {
      value: "hola a ti",
      label: "This is the label",
      type: "textarea",
      options: {
        maxLength: 10,
        minLength: 2,
        mandatory: true,
      },
    },
    custom: {
      value: false,
      custom: CustomInput,
      options: {
        mandatory: false,
      },
    },
    checkbox: {
      value: false,
      label: "Accpet conditions",
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
  onSubmit,
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
  onSubmit,
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

export const DateInput = Template.bind({});
DateInput.args = {
  onSubmit,
  fields: {
    hola: {
      value: null,
      label: "This is the label",
      type: "date",
      options: {
        mandatory: true,
      },
    },
  },
};

export const TextAreaInput = Template.bind({});
TextAreaInput.args = {
  onSubmit,
  fields: {
    hola: {
      value: "hola a ti",
      label: "This is the label",
      type: "textarea",
      options: {
        minLength: 2,
        mandatory: true,
      },
    },
  },
};

export const RadioInput = Template.bind({});
RadioInput.args = {
  onSubmit,
  fields: {
    radio: {
      value: "hola a ti",
      valueOptions: [
        {
          label: "option 1",
          value: "option1",
        },
        {
          label: "option 2",
          value: "option2",
        },
        {
          label: "option 3",
          value: "option3",
        },
      ],
      label: "This is the label",
      type: "radio",
      options: {
        minLength: 2,
        mandatory: true,
      },
    },
  },
};

export const SelectInput = Template.bind({});
SelectInput.args = {
  onSubmit,
  fields: {
    hola: {
      value: "option3",
      valueOptions: [
        {
          label: "option 1",
          value: "option1",
        },
        {
          label: "option 2",
          value: "option2",
        },
        {
          label: "option 3",
          value: "option3",
        },
      ],
      label: "This is the label",
      type: "select",
      options: {
        minLength: 2,
        mandatory: true,
      },
    },
  },
};
