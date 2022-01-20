// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { ToggleButtonProps } from "./ToggleButton.types";

const ToggleButton: React.FC<ToggleButtonProps> = ({
    size,
    children,
    checked,
    defaultChecked,
    disabled,
    form,
    name,
    onChange,
}) => (
    <StyledToggleButton
        buttonSize={size || "medium"}
        checked={checked}
        disabled={disabled}
        form={form}
    >
        <input
            type="checkbox"
            checked={checked}
            defaultChecked={defaultChecked}
            form={form}
            name={name}
            onChange={onChange}
            disabled={disabled}
        />
        {children}
    </StyledToggleButton>
);

export default ToggleButton;

interface StyledToggleButtonProps {
    buttonSize: "small" | "medium" | "large";
    checked: boolean;
    disabled: boolean;
}

const StyledToggleButton = styled.label<StyledToggleButtonProps>`
    padding: 8px 16px;
    border-radius: 12px;
    background: ${({ theme, checked, disabled }) => {
        if (disabled) {
            return theme.colors.focus.inactive;
        } else if (checked) {
            return theme.colors.action.active;
        } else {
            return theme.colors.cell.primary;
        }
    }};
    color: ${({ theme, checked, disabled }) => {
        if (disabled) {
            return theme.colors.text.tertiary;
        } else if (checked) {
            return theme.colors.action.text;
        } else {
            return theme.colors.text.primary;
        }
    }};
    transition: background-color 0.1s ease-in-out;
    transition: color 0.1s ease-in-out;

    border: ${({ theme, checked, disabled }) => {
        if (disabled) return "none";
        if (checked) return "none";
        return `1px solid ${theme.colors.focus.active}`;
    }};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    &:hover {
        background-color: ${({ theme, checked, disabled }) => {
            if (disabled) return theme.colors.focus.inactive;
            if (checked) return theme.colors.action.hover;
            return theme.colors.cell.primary;
        }};
        color: ${({ theme, checked, disabled }) => {
            if (disabled) return theme.colors.text.tertiary;
            if (checked) return theme.colors.action.text;
            return theme.colors.text.secondary;
        }}};
        border: ${({ theme, checked, disabled }) => {
            if (disabled) return "none";
            if (checked) return "none";
            return `1px solid ${theme.colors.focus.hover}`;
        }};

    }
    padding: ${({ buttonSize }) => {
        switch (buttonSize) {
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
    font-size: ${({ buttonSize }) => {
        switch (buttonSize) {
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

    & > input {
        display: none;
    }
`;
