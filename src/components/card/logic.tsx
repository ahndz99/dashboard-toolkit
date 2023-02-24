import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  title: string;
  subtitle?: string;
  headerLeftNode?: ReactNode;
  headerRightNode?: ReactNode;
  footerNode: ReactNode;
};

const Card = ({
  className = "",
  children,
  title,
  subtitle = "",
  headerLeftNode,
  headerRightNode,
  footerNode,
}: Props) => {
  const headerLeftNodeElement = headerLeftNode && (
    <span className="left-node">{headerLeftNode}</span>
  );

  const headerRightNodeElement = headerRightNode && (
    <span className="right-node">{headerRightNode}</span>
  );

  const subtitleElement = subtitle && <h3 className="subtitle">{subtitle}</h3>;

  const footerElement = footerNode && (
    <div className="footer">{footerNode}</div>
  );

  return (
    <div className={className}>
      <div className="header">
        <div className="left-container">
          {headerLeftNodeElement}
          <div className="text-container">
            <h2 className="title">{title}</h2>
            {subtitleElement}
          </div>
        </div>
        {headerRightNodeElement}
      </div>
      <div className="body">{children}</div>
      {footerElement}
    </div>
  );
};

export default Card;
