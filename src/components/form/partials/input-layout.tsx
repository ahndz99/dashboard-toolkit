import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
};

const InputLayout = ({ children, label }: Props) => {
  return (
    <div className="input-layout">
      <label>{label}</label>
      {children}
    </div>
  );
};

export default InputLayout;
