import classes from "./Button.module.css";
import { Button as AntButton, ButtonProps } from "antd";

export type TButtonProps = ButtonProps;

export const Button = (props: TButtonProps) => {
  return <AntButton className={classes["button"]} {...props} />;
};
