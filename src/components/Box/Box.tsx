import React, { FC } from "react";
import { StyledBox } from "./Box.styles";

export const Box: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};
