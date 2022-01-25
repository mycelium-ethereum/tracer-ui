// Generated with util/create-component.js
import styled from "styled-components";

import {
    HeadlineProps,
    TitleProps,
    SubtitleProps,
    BodyProps,
    FooterProps,
} from "./Text.types";

const getSharedStyles = (props: any) => `
    font-family: ${props.theme.fontFamily[props.fontFamily || "primary"]};
    margin: ${props.margin || "0"};
    color: ${props.theme.colors.text[props.color || "primary"]};
    text-align: ${props.align || "left"};
    font-weight: ${(() => {
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
    })()};
`;

const Headline = styled.h1<HeadlineProps>`
    ${(props) => getSharedStyles(props)}
    font-size: 40px;
    line-height: 60px;
`;

const Title = styled.h2<TitleProps>`
    ${(props) => getSharedStyles(props)}
    font-size: 24px;
    line-height: 36px;
`;

const Subtitle = styled.h3<SubtitleProps>`
    ${(props) => getSharedStyles(props)}
    font-size: 20px;
    line-height: 30px;
`;

const Body = styled.p<BodyProps>`
    ${(props) => getSharedStyles(props)}
    font-size: 16px;
    line-height: 24px;
`;

const Footer = styled.p<FooterProps>`
    ${(props) => getSharedStyles(props)}
    font-size: 14px;
    line-height: 20px;
`;

export default {
    Headline,
    Title,
    Subtitle,
    Body,
    Footer,
};
