// Generated with util/create-component.js
import styled from "styled-components";

import {
    HeadlineProps,
    TitleProps,
    SubtitleProps,
    BodyProps,
    FooterProps,
} from "./Text.types";

const Headline = styled.h1<HeadlineProps>`
    font-size: 40px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.colors.text.active};
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

const Title = styled.h2<TitleProps>`
    font-size: 24px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.colors.text.active};
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

const Subtitle = styled.h3<SubtitleProps>`
    font-size: 20px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.colors.text.active};
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

const Body = styled.p<BodyProps>`
    font-size: 16px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.colors.text.active};
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

const Footer = styled.p<FooterProps>`
    font-size: 14px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.colors.text.active};
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
