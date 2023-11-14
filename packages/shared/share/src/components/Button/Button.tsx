import React from "react";
import * as Styled from "./style";
interface ButtonProps {
  children?: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Button;
