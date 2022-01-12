// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { ToggleButtonProps } from "./ToggleButton.types";

const ToggleButton: React.FC<ToggleButtonProps> = ({
    onChange,
    checked,
    size = "medium",
    ...rest
}) => (
    <StyledToggleButton
        data-testid="toggle-button"
        onClick={() => onChange(!checked)}
        checked={checked}
        size={size}
        {...rest}
    ></StyledToggleButton>
);

export default ToggleButton;

interface StyledToggleButtonProps {
    checked: boolean;
    size: "small" | "medium" | "large";
}

const StyledToggleButton = styled.button<StyledToggleButtonProps>`
    padding: 8px 16px;
    border-radius: 12px;
    background: ${({ theme, checked }) =>
        checked ? theme.colors.action.active : theme.colors.cell.primary};
    color: ${({ theme, checked }) =>
        checked ? theme.colors.action.text : theme.colors.focus.active};
    border: ${({ theme, checked }) =>
        checked ? "none" : `1px solid ${theme.colors.focus.active}`};
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;
    &:hover {
        background-color: ${({ theme, checked }) =>
            checked ? theme.colors.action.hover : theme.colors.cell.primary};
        color: ${({ theme, checked }) =>
            checked ? theme.colors.action.text : theme.colors.focus.hover};
        border: ${({ theme, checked }) =>
            checked ? "none" : `1px solid ${theme.colors.focus.hover}`};
    }
    &:disabled {
        background-color: ${({ theme }) => theme.colors.focus.inactive};
        color: ${({ theme }) => theme.colors.focus.active};
        border: none;
        cursor: not-allowed;
    }
    padding: ${({ size }) => {
        switch (size) {
            case "small":
                return "8px 16px";
            case "medium":
                return "12px 24px";
            case "large":
                return "16px 32px";
            default:
                return "12px 24px";
        }
    }};
    font-size: ${({ size }) => {
        switch (size) {
            case "small":
                return "0.8rem";
            case "medium":
                return "1rem";
            case "large":
                return "1.2rem";
            default:
                return "1rem";
        }
    }};
`;
