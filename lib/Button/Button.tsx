import type { ButtonHTMLAttributes } from "react";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children }: TButtonProps) => {
  return <button>{children}</button>;
};
