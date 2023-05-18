import styled from "@emotion/styled";
import { darken } from "polished";

export const StyledButton = styled("button")<{ color: string }>`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ color }) => color};
  &:hover {
    background: ${({ color }) => darken(0.05, color)};
    border: 2px solid black;
    transition: 0.2s;
  }
  &:disabled {
    background: grey;
  }
`;
