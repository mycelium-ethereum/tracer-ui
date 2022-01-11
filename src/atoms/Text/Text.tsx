// Generated with util/create-component.js
import styled from "styled-components";

import {
    HeadlineProps,
    TitleProps,
    SubtitleProps,
    BodyProps,
    FooterProps,
} from "./Text.types";

const Headline = styled.h1.attrs<HeadlineProps>((props) => ({
    color: props.color || "primary",
}))<HeadlineProps>`
    margin: 0;
    font-size: 40px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.colors.text[props.color]};
    font-weight: ${(props) => {
        switch (props.variant) {
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

const Title = styled.h2.attrs<HeadlineProps>((props) => ({
    color: props.color || "primary",
}))<TitleProps>`
    margin: 0;
    font-size: 24px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.colors.text[props.color]};
    font-weight: ${(props) => {
        switch (props.variant) {
            case "light":
                return "300";
            case "regular":
                return "400";
            case "bold":
                return "700";
            case "bolder":
                return "800";
            default:
                return "400";
        }
    }};
`;

const Subtitle = styled.h3.attrs<HeadlineProps>((props) => ({
    color: props.color || "primary",
}))<SubtitleProps>`
    margin: 0;
    font-size: 20px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.colors.text[props.color]};
    font-weight: ${(props) => {
        switch (props.variant) {
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

const Body = styled.p.attrs<HeadlineProps>((props) => ({
    color: props.color || "primary",
}))<BodyProps>`
    margin: 0;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.colors.text[props.color]};
    font-weight: ${(props) => {
        switch (props.variant) {
            case "regular":
                return "400";
            case "bold":
                return "700";
            default:
                return "400";
        }
    }};
`;

const Footer = styled.p.attrs<HeadlineProps>((props) => ({
    color: props.color || "primary",
}))<FooterProps>`
    margin: 0;
    font-size: 12px;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.colors.text[props.color]};
    font-weight: ${(props) => {
        switch (props.variant) {
            case "regular":
                return "400";
            case "bold":
                return "700";
            default:
                return "400";
        }
    }};
`;

export default {
    Headline,
    Title,
    Subtitle,
    Body,
    Footer,
};
