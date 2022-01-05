// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({ children, ...props }) => (
    <StyledCard data-testid="card" {...props}>
        {children}
    </StyledCard>
);

export default Card;

const StyledCard = styled.div.attrs<CardProps>((props) => ({
    maxWidth: props.maxWidth,
    color: props.color || "primary",
    padding: props.padding || "md",
}))<CardProps>`
    background-color: ${(props) =>
        props.color === "highlight"
            ? props.theme.colors.cell.highlight
            : props.theme.colors.cell.active};
    color: ${(props) => props.theme.colors.text.active};
    box-sizing: border-box;
    border: ${(props) =>
        props.border ? "1px solid " + props.theme.colors.cell.border : "none"};
    padding: 1rem;
    margin: 0 auto;
    width: ${(props) => (props.fluid ? "100%" : "calc(100% - 2rem)")};
    max-width: ${(props) => props.maxWidth};
    border-radius: ${(props) => (props.square ? "0" : "1.5rem")};
    box-shadow: ${(props) =>
        props.shadow ? "0 0.5rem 1rem rgba(0, 0, 0, 0.1)" : "none"};
    padding: ${(props) => {
        switch (props.padding) {
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
