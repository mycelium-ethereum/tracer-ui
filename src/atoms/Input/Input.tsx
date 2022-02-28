// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { InputProps } from "./Input.types";

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <Container
            disabled={props.disabled}
            variant={props.variant || "primary"}
            textAlign={props.textAlign || "left"}
            form={props.form}
            className={props.className}
        >
            {props.leftSlot ? <LeftSlot>{props.leftSlot}</LeftSlot> : null}
            <StyledInput
                placeholder={props.placeholder}
                disabled={props.disabled}
                data-testid="input"
                value={props.value}
                form={props.form}
                name={props.name}
                readOnly={props.readOnly}
                required={props.required}
                min={props.min}
                max={props.max}
                step={props.step}
                type={props.type}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                ref={ref}
            />
            {props.rightSlot ? <RightSlot>{props.rightSlot}</RightSlot> : null}
        </Container>
    );
});
Input.displayName = "Input";

export default Input;

interface ContainerProps {
    disabled?: boolean;
    variant: InputProps["variant"];
    textAlign: InputProps["textAlign"];
}

const Container = styled.label<ContainerProps>`
    position: relative;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 10px 18px;
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.colors.focus.active};
    text-align: ${(props) => props.textAlign};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};

    ${({ theme, variant }) => {
        if (variant === "primary") {
            return `
                border-color: ${theme.colors.focus.active};
                background-color: ${theme.colors.cell.primary};
                color: ${theme.colors.focus.text};
                `;
        } else if (variant === "secondary") {
            return `
                border-color: ${theme.colors.focus.active};
                background-color: ${theme.colors.cell.secondary};
                color: ${theme.colors.focus.text};
                `;
        } else if (variant === "alert") {
            return `
                border-color: ${theme.colors.alert.active};
                background-color: ${theme.colors.alert.cell};
                color: ${theme.colors.alert.text};
                & ::placeholder { color: ${theme.colors.alert.text}; }
                & :-ms-input-placeholder { color: ${theme.colors.alert.text}; }
                & ::-moz-placeholder { color: ${theme.colors.alert.text}; }
                & ::-ms-input-placeholder { color: ${theme.colors.alert.text}; }
                `;
        } else if (variant === "danger") {
            return `
                border-color: ${theme.colors.danger.active};
                background-color: ${theme.colors.danger.cell};
                color: ${theme.colors.danger.text};
                & ::placeholder { color: ${theme.colors.danger.text}; }
                & ::-webkit-input-placeholder { color: ${theme.colors.danger.text}; }
                & ::-moz-placeholder { color: ${theme.colors.danger.text}; }
                & ::-ms-input-placeholder { color: ${theme.colors.danger.text}; }
                `;
        }
    }}
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
    color: inherit;
    text-align: inherit;
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
`;

const RightSlot = styled.div`
    margin-left: 10px;
`;
