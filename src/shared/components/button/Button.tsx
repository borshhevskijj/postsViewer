import React from "react";
import cl from "./button.module.scss";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: string | React.ReactNode | React.ReactElement;
  view: "colored" | "underline" | "transparent";
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, view }) => {
  return (
    <button className={`${cl.button} ${cl[view]}`} onClick={onClick}>
      {children}
    </button>
  );
};
