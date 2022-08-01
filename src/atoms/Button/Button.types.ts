import React from "react";

// Generated with util/create-component.js
export interface ButtonProps
    extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
    variant?:
        | "primary"
        | "secondary"
        | "cell"
        | "alert"
        | "danger"
        | "ghost"
        | "success";
    size?: "small" | "medium" | "large";
    fluid?: boolean;
    emphasis?: boolean;
}
