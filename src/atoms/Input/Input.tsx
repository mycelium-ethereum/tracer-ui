// Generated with util/create-component.js
import React from "react";
import styled, { DefaultTheme, StyledComponentProps } from "styled-components";

import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = (props) => (
  <StyledInput
    data-testid="input"
    {...(props as StyledComponentProps<"input", DefaultTheme, {}, never>)}
  />
);

export default Input;

const StyledInput = styled.input`
  font-size: 0.9rem;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text.active};
  width: 100%;
  border-radius: 12px;
  padding: 10px 18px;
  background: ${({ theme }) => theme.colors.cell.highlight};
  border: 1px solid ${({ theme }) => theme.colors.cell.border};
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.text.inactive};
  }
`;
