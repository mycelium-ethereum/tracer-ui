// Generated with util/create-component.js
import React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  ...rest
}) => (
  <div data-testid="Button">
    <StyledButton
      variant={variant}
      size={size}
      {...(rest as StyledComponent<"button", DefaultTheme, {}, never>)}
    >
      {children}
    </StyledButton>
  </div>
);

type StyledButtonProps = {
  variant: ButtonProps["variant"];
  size: ButtonProps["size"];
};

const StyledButton = styled.button.attrs<StyledButtonProps>((props) => ({
  variant: props.variant || "primary",
  size: props.size || "medium",
}))<StyledButtonProps>`
  background: ${({ variant, disabled, theme }) => {
    if (variant === "ghost") {
      return "rgba(255, 255, 255, 0.2)";
    } else {
      return disabled
        ? theme.colors.action.inactive
        : theme.colors.action.active;
    }
  }};
  color: ${({ theme }) => theme.colors.action.text};
  border: ${({ variant }) => (variant === "ghost" ? "1px solid #FFF" : "none")};
  border-radius: 4px;
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
  width: 100%;
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
  line-height: 1.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  :hover {
    ${({ variant, disabled, theme }) => {
      if (variant === "ghost") {
        return "background: rgba(255, 255, 255, 0.2)";
      } else {
        return disabled ? "" : `background: ${theme.colors.action.hover}`;
      }
    }}
  }
`;

export default Button;
