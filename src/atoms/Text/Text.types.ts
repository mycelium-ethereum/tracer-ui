// Generated with util/create-component.js

import { TracerTheme } from "src/theme";

type TextColor = TracerTheme["colors"]["text"];

export interface HeadlineProps {
    variant?: "light" | "regular" | "bold" | "bolder";
    color?: TextColor;
    align?: "left" | "center" | "right";
    margin?: string;
}

export interface TitleProps {
    variant?: "light" | "regular" | "bold" | "bolder";
    color?: TextColor;
    align?: "left" | "center" | "right";
    margin?: string;
}

export interface SubtitleProps {
    variant?: "light" | "regular" | "bold" | "bolder";
    color?: TextColor;
    align?: "left" | "center" | "right";
    margin?: string;
}

export interface BodyProps {
    variant?: "regular" | "bold";
    color?: TextColor;
    align?: "left" | "center" | "right";
    margin?: string;
}

export interface FooterProps {
    variant?: "regular" | "bold";
    color?: TextColor;
    align?: "left" | "center" | "right";
    margin?: string;
}
