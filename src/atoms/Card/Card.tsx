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
    shadow: props.shadow || "sm",
}))<CardProps>`
    background-color: ${(props) => {
        switch (props.color) {
            case "primary":
                return props.theme.colors.cell.primary;
            case "secondary":
                return props.theme.colors.cell.secondary;
            case "tertiary":
                return props.theme.colors.cell.tertiary;
        }
    }};
    box-sizing: border-box;
    border-color: ${(props) => props.theme.colors.cell.stroke};
    border-width: ${(props) => (props.border ? "1px" : "0px")};
    margin: 0 auto;
    width: ${(props) => (props.fluid ? "100%" : "calc(100% - 2rem)")};
    max-width: ${(props) => props.maxWidth};
    border-radius: ${(props) => {
        if (props.square) {
            return "0";
        }
        return "16px";
    }};
    box-shadow: ${(props) => {
        switch (props.shadow) {
            case "sm":
                return "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);";
            case "md":
                return "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);";
            case "lg":
                return "0px 4px 8px rgba(0, 0, 0, 0.06), 0px 8px 16px rgba(0, 0, 0, 0.1);";
            case "none":
                return "none";
        }
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
