import { Button as AntButton, ButtonProps } from "antd";

type TButtonProps = ButtonProps;

export const Button = (props: TButtonProps) => {
  return <AntButton {...props} />;
};
