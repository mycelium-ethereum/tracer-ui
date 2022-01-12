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
    <StyledButton
        data-testid="button"
        variant={variant}
        size={size}
        {...(rest as StyledComponent<"button", DefaultTheme, {}, never>)}
    >
        {children}
    </StyledButton>
);

type StyledButtonProps = {
    variant: ButtonProps["variant"];
    size: ButtonProps["size"];
};

const StyledButton = styled.button.attrs<StyledButtonProps>((props) => ({
    variant: props.variant || "primary",
    size: props.size || "medium",
}))<StyledButtonProps>`
  font-family: "Inter", sans-serif;
  border-radius: 12px;
  border: none;
  width: 100%;
  line-height: 1.5rem;
  transition: background-color 0.1s ease-in-out;
  ${({ variant, theme }) => {
      switch (variant) {
          case "primary":
              return `
                background-color: ${theme.colors.action.active};
                color: ${theme.colors.action.text};
                &:hover {
                    background-color: ${theme.colors.action.hover};
                }
                &:active {
                    background-color: ${theme.colors.action.active};
                }
                &:disabled {
                    background-color: ${theme.colors.action.inactive};
                    color: ${theme.colors.action.reverse};
                }
                `;
          case "focus":
              return `
                background-color: ${theme.colors.focus.active};
                color: ${theme.colors.focus.text};
                &:hover {
                    background-color: ${theme.colors.focus.hover};
                }
                &:active {
                    background-color: ${theme.colors.focus.active};
                }
                &:disabled {
                    background-color: ${theme.colors.focus.inactive};
                    color: ${theme.colors.focus.reverse};
                }
                `;
          case "alert":
              return `
                background-color: ${theme.colors.alert.cell};
                color: ${theme.colors.alert.text};
                border: 1px solid ${theme.colors.alert.text};
                &:hover {
                    color: ${theme.colors.alert.hover};
                    border: 1px solid ${theme.colors.alert.hover};
                }
                &:active {
                    color: ${theme.colors.alert.text};
                    border: 1px solid ${theme.colors.alert.text};
                }
                &:disabled {
                    color: ${theme.colors.alert.text};
                    border: 1px solid ${theme.colors.alert.text};
                }
            `;
          case "danger":
              return `
                background-color: ${theme.colors.danger.cell};
                color: ${theme.colors.danger.text};
                border: 1px solid ${theme.colors.danger.text};
                &:hover {
                    color: ${theme.colors.danger.hover};
                    border: 1px solid ${theme.colors.danger.hover};
                }   
                &:active {
                    color: ${theme.colors.danger.text};
                    border: 1px solid ${theme.colors.danger.text};
                }
                &:disabled {
                    color: ${theme.colors.danger.text};
                    border: 1px solid ${theme.colors.danger.text};
                }
            `;
      }
  }}

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
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export default Button;
