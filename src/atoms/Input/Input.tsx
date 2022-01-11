// Generated with util/create-component.js
import React from "react";
import styled, { DefaultTheme, StyledComponentProps } from "styled-components";

import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = React.forwardRef(
    ({ leftSlot, rightSlot, disabled, ...rest }, ref) => (
        <Container disabled={disabled}>
            {leftSlot ? <LeftSlot>{leftSlot}</LeftSlot> : null}
            <StyledInput
                ref={ref}
                disabled={disabled}
                data-testid="input"
                {...(rest as StyledComponentProps<
                    "input",
                    DefaultTheme,
                    {},
                    never
                >)}
            />
            {rightSlot ? <RightSlot>{rightSlot}</RightSlot> : null}
        </Container>
    ),
);
Input.displayName = "Input";

export default Input;

interface ContainerProps {
    disabled?: boolean;
}

const Container = styled.span<ContainerProps>`
    position: relative;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 10px 18px;
    color: ${({ theme }) => theme.colors.text.primary};
    border-radius: 12px;
    background: ${({ disabled, theme }) =>
        disabled ? theme.colors.cell.tertiary : theme.colors.cell.secondary};
    border: 1px solid ${({ theme }) => theme.colors.focus.active};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
`;

const StyledInput = styled.input`
    width: 100%;
    font-size: 0.9rem;
    font-family: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    outline: none;
    background: transparent;
    &:disabled {
        cursor: not-allowed;
    }
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type="number"] {
        -moz-appearance: textfield;
    }
`;

const LeftSlot = styled.div`
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.text.secondary};
`;

const RightSlot = styled.div`
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.text.secondary};
`;
