// Generated with util/create-component.js
import React from "react";
import styled, { DefaultTheme, StyledComponentProps } from "styled-components";

import { TextareaProps } from "./Textarea.types";

const Textarea: React.FC<TextareaProps> = ({ variant, ...rest }) => (
    <StyledTextarea
        data-testid="Textarea"
        variant={variant || "primary"}
        {...(rest as StyledComponentProps<"textarea", DefaultTheme, {}, never>)}
    />
);

export default Textarea;

type StyledTextareaProps = {
    variant: TextareaProps["variant"];
};

const StyledTextarea = styled.textarea<StyledTextareaProps>`
    font-size: 0.9rem;
    font-family: inherit;
    color: ${({ theme }) => theme.colors.text.primary};
    width: 100%;
    outline: none;
    border-radius: 12px;
    padding: 10px 18px;
    ${({ theme, variant }) => {
        if (variant === "primary") {
            return `
                border-color: ${theme.colors.cell["highlight-stroke"]};
                background-color: ${theme.colors.cell.secondary};
                color: ${theme.colors.text.primary};
                `;
        } else if (variant === "alert") {
            return `
                border-color: ${theme.colors.alert.active};
                background-color: ${theme.colors.alert.cell};
                color: ${theme.colors.alert.text};
                ::placeholder { color: ${theme.colors.alert.text}; }
                :-ms-input-placeholder { color: ${theme.colors.alert.text}; }
                ::-moz-placeholder { color: ${theme.colors.alert.text}; }
                ::-ms-input-placeholder { color: ${theme.colors.alert.text}; }
                `;
        } else if (variant === "danger") {
            return `
                border-color: ${theme.colors.danger.active};
                background-color: ${theme.colors.danger.cell};
                color: ${theme.colors.danger.text};
                ::placeholder { color: ${theme.colors.danger.text}; }
                ::-webkit-input-placeholder { color: ${theme.colors.danger.text}; }
                ::-moz-placeholder { color: ${theme.colors.danger.text}; }
                ::-ms-input-placeholder { color: ${theme.colors.danger.text}; }
                `;
        }
    }}
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
