// Generated with util/create-component.js
import React from "react";
import styled, { DefaultTheme, StyledComponentProps } from "styled-components";

import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = React.forwardRef((props, ref) => (
    <StyledInput
        ref={ref}
        data-testid="input"
        {...(props as StyledComponentProps<"input", DefaultTheme, {}, never>)}
    />
));
Input.displayName = "Input";

export default Input;

const StyledInput = styled.input`
    font-size: 0.9rem;
    font-family: inherit;
    color: ${({ theme }) => theme.colors.text.primary};
    width: 100%;
    border-radius: 12px;
    padding: 10px 18px;
    background: ${({ theme }) => theme.colors.cell.secondary};
    border: 1px solid ${({ theme }) => theme.colors.focus.active};
    &:disabled {
        cursor: not-allowed;
        background: ${({ theme }) => theme.colors.cell.tertiary};
    }
`;
