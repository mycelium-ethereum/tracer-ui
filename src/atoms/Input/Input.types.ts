import React from "react";

// Generated with util/create-component.js
export interface InputProps {
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
    textAlign?: "left" | "center" | "right";
    variant?: "primary" | "secondary" | "alert" | "danger";
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
    form?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    max?: number;
    min?: number;
    step?: number;
    value?: string;
    required?: boolean;
    readOnly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    className?: string;
}
