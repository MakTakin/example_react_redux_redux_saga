import React, { FC } from "react";
import { StyledButton } from "./Button.styles";
import { ButtonState } from "store/buttonSlice";

interface ButtonProps {
  state: ButtonState;
  onClick: () => void;
}
export const Button: FC<ButtonProps> = ({ state, onClick }) => {
  const { value, isLoading } = state;
  return (
    <StyledButton
      color={value ? "green" : "red"}
      onClick={onClick}
      disabled={isLoading}
    >
      {value ? "ON" : "OFF"}
    </StyledButton>
  );
};
