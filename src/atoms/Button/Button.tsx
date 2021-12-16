import React from "react";
import styled from "styled-components";

import { ButtonProps } from "./Button.types";

const StyledButton = styled.button`
    background-color: white;
    border: 1px solid black;
    padding: 16px;
    width: 360px;
    text-align: center;

    ${(props) =>
        props.theme === "secondary" &&
        `background-color: black;
     color: white;`}
`;

const Button: React.FC<ButtonProps> = ({ theme, children }) => (
    <StyledButton data-testid="test-button" theme={theme}>
        {children}
    </StyledButton>
);

export default Button;
