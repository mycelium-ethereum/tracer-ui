import React from "react";

// Generated with util/create-component.js
export interface ButtonProps
    extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
    variant?: "action" | "focus" | "alert" | "danger" | "ghost";
    size?: "small" | "medium" | "large";
    fluid?: boolean;
}
