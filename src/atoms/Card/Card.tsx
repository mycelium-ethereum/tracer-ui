// Generated with util/create-component.js
import React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({ children, ...props }) => (
    <StyledCard
        data-testid="card"
        {...(props as StyledComponent<"div", DefaultTheme, {}, never>)}
    >
        {children}
    </StyledCard>
);

export default Card;

const StyledCard = styled.div.attrs<CardProps>((props) => ({
    maxWidth: props.maxWidth,
    color: props.color || "primary",
    padding: props.padding || "md",
    border: props.border || "none",
}))<CardProps>`
    z-index: auto;
    background: ${(props) => {
        switch (props.color) {
            case "primary":
                return props.theme.colors.cell.primary;
            case "secondary":
                return props.theme.colors.cell.secondary;
            case "gradient":
                return props.theme.colors.cell.gradient;
        }
    }};
    box-sizing: border-box;
    border-style: solid;
    border-color: ${(props) => {
        if (props.border === "strong") {
            return props.theme.colors.cell["highlight-stroke"];
        } else if (props.border === "light") {
            return props.theme.colors.cell.stroke;
        } else {
            return "transparent";
        }
    }};
    border-width: 1px;
    margin: 0 auto;
    width: 100%;
    max-width: ${(props) => props.maxWidth};
    border-radius: ${(props) => {
        if (props.square) {
            return "0";
        }
        return "6px";
    }};

    padding: ${(props) => {
        switch (props.padding) {
            case "none":
                return "0";
            case "sm":
                return "1rem";
            case "md":
                return "2rem";
            case "lg":
                return "3rem";
            default:
                return "1rem";
        }
    }};
`;
