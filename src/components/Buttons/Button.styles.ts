import styled from "@emotion/styled";
import { darken, lighten } from "polished";

export const StyledButton = styled.button`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: red;
  &:hover {
    background: ${darken(0.05, "red")};
    border: 2px solid black;
    transition: 0.2s;
  }
`;
