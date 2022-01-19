// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { TextProps } from "./Text.types";

const asBySize: Record<TextProps["size"], string> = {
    footer: "p",
    body: "p",
    subtitle: "h4",
    title: "h3",
    headline: "h1",
};

const Text: React.FC<TextProps> = ({ size, as, ...rest }) => {
    const Element: string = as || asBySize[size] || "p";
    // @ts-ignore
    return <StyledText size={size} as={Element} {...rest} />;
};

const StyledText = styled.span<TextProps>`
    margin: ${(props) => props.margin || "0"};
    font-size: ${({ size, theme }) => {
        switch (size) {
            case "footer":
                return theme.textSize.xs;
            case "body":
                return theme.textSize.sm;
            case "subtitle":
                return theme.textSize.md;
            case "title":
                return theme.textSize.lg;
            case "headline":
                return theme.textSize.xl;
            default:
                return theme.textSize.sm;
        }
    }};
    font-family: ${(props) => {
        switch (props.font) {
            case "body":
                return props.theme.fontFamily.body;
            case "heading":
                return props.theme.fontFamily.heading;
            default:
                return props.theme.fontFamily.body;
        }
    }};
    color: ${(props) => props.theme.colors.text[props.color]};
    text-align: ${(props) => props.align || "left"};
    font-weight: ${(props) => {
        switch (props.weight) {
            case "light":
                return "300";
            case "regular":
                return "400";
            case "bold":
                return "700";
            case "bolder":
                return "900";
            default:
                return "400";
        }
    }};
`;

export default Text;
