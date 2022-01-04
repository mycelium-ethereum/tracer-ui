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
