// Generated with util/create-component.js
import React from "react";
import styled, { DefaultTheme, StyledComponentProps } from "styled-components";

import { TextareaProps } from "./Textarea.types";

const Textarea: React.FC<TextareaProps> = (props) => (
    <StyledTextarea
        data-testid="Textarea"
        {...(props as StyledComponentProps<
            "textarea",
            DefaultTheme,
            {},
            never
        >)}
    />
);

export default Textarea;

const StyledTextarea = styled.textarea`
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
