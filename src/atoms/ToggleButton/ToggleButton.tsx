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
    className,
}) => (
    <StyledToggleButton
        buttonSize={size || "medium"}
        checked={checked}
        disabled={disabled}
        form={form}
        className={className}
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
    font-family: ${(props) => props.theme.fontFamily.heading};
    border-radius: 12px;
    background: ${({ theme, checked }) =>
        checked ? theme.colors.action.active : "transparent"};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: background-color 0.1s ease-in-out;
    transition: color 0.1s ease-in-out;

    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

    border: ${({ theme, checked }) => {
        if (checked) return "1px solid transparent";
        return `1px solid ${theme.colors.cell.stroke}`;
    }};

    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    &:hover {
        ${({ theme, checked, disabled }) => {
            if (disabled) return "";
            if (checked) return `background: ${theme.colors.action.hover};`;
            else return `color: ${theme.colors.text.secondary};`;
        }}
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
    user-select: none;

    & > input {
        display: none;
    }
`;
