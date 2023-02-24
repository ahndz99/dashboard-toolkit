import React, { ReactNode } from "react";

enum Type {
  Button = "button",
  Reset = "reset",
  Submit = "submit",
}

type Props = {
  className?: string;
  children: ReactNode;
  onClick: (_: any) => any;
  onFocus: (_: any) => any;
  onBlur: (_: any) => any;
  onKeyDown: (_: any) => any;
  onKeyUp: (_: any) => any;
  onMouseDown: (_: any) => any;
  onMouseEnter: (_: any) => any;
  onMouseLeave: (_: any) => any;
  onMouseOut: (_: any) => any;
  onMouseOver: (_: any) => any;
  onMouseUp: (_: any) => any;
  onTouchEnd: (_: any) => any;
  onTouchStart: (_: any) => any;
  type: Type;
};

const defaultProps = {
  onClick: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onKeyUp: () => {},
  onMouseDown: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onMouseOut: () => {},
  onMouseOver: () => {},
  onMouseUp: () => {},
  onTouchEnd: () => {},
  onTouchStart: () => {},
};

const Button = ({
  className = "",
  children,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  onTouchEnd,
  onTouchStart,
}: Props) => {
  return (
    <button
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
