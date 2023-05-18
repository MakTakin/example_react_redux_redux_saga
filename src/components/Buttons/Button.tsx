import React, { FC } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  state: boolean;
  onClick: () => void;
}
export const Button: FC<ButtonProps> = ({ state, onClick }) => {
  return (
    <StyledButton color={state ? "green" : "red"} onClick={onClick}>
      {state ? "ON" : "OFF"}
    </StyledButton>
  );
};
