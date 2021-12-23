import React from "react";

// Generated with util/create-component.js
export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
}
