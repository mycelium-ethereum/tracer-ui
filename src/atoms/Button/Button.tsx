import React from "react";
import styled from "styled-components";

import { ButtonProps } from "./Button.types";

const Button = styled.button.attrs<ButtonProps>((props) => ({
  variant: props.variant || "primary",
  size: props.size || "medium",
}))<ButtonProps>`
  border-radius: 0.25rem;
  padding: 16px;
  width: 360px;
  text-align: center;
  background-color: ${(props) => props.theme.colors[props.variant]};
  padding: ${(props) =>
    props.size === "small"
      ? "0.5rem 1rem"
      : props.size === "medium"
      ? "0.75rem 1rem"
      : "1rem 1.5rem"};
  font-size: ${(props) => (props.size === "small" ? "0.75rem" : "1rem")};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
