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
  border-radius: 4px;
  border: none;
  width: 100%;
  line-height: 1.5rem;
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
            color: ${theme.colors.action.text};
            border: 1px solid ${theme.colors.action.active};
          }
          &:disabled {
            background-color: ${theme.colors.action.inactive};
          }
        `;
          case "secondary":
              return `
          background-color: ${theme.colors.cell.background};
          color: ${theme.colors.text.active};
          border: 1px solid ${theme.colors.cell.border};
          &:disabled {
            background-color: ${theme.colors.cell.inactive};
          }
          &:hover {
            background-color: ${theme.colors.cell.highlight};
          }
        `;
          case "ghost":
              return `
          background-color: rgba(255, 255, 255, 0.2);
          color: #FFF;
          border: 1px solid #FFF;
          &:disabled {
            border-color: #999;
            color: #999;
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
