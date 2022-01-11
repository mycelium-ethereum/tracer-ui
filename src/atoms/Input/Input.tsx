// Generated with util/create-component.js
import React from "react";
import styled, { DefaultTheme, StyledComponentProps } from "styled-components";
import { Icon } from "../Icon";

import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = React.forwardRef(
    ({ icon, ...rest }, ref) => (
        <Container>
            {icon ? (
                <IconContainer>
                    <Icon name={icon} color="tertiary" />
                </IconContainer>
            ) : null}
            <StyledInput
                ref={ref}
                hasIcon={!!icon}
                data-testid="input"
                {...(rest as StyledComponentProps<
                    "input",
                    DefaultTheme,
                    {},
                    never
                >)}
            />
        </Container>
    ),
);
Input.displayName = "Input";

export default Input;

const Container = styled.div`
    position: relative;
    width: 100%;
`;

interface StyledInputProps {
    hasIcon: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
    padding: 10px 18px;
    padding-left: ${({ hasIcon }) => (hasIcon ? "44px" : "18px")};
    font-size: 0.9rem;
    font-family: inherit;
    color: ${({ theme }) => theme.colors.text.primary};
    width: 100%;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.cell.secondary};
    border: 1px solid ${({ theme }) => theme.colors.focus.active};
    &:disabled {
        cursor: not-allowed;
        background: ${({ theme }) => theme.colors.cell.tertiary};
    }
`;

const IconContainer = styled.div`
    position: absolute;
    left: 18px;
    top: 10px;
`;
