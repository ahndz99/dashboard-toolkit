import React, { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

const SectionLayout = ({ children, title, subtitle }: Props) => {
  return (
    <div className="section-layout">
      <span className="section-title">{title}</span>
      <span className="section-subtitle">{subtitle}</span>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default SectionLayout;
