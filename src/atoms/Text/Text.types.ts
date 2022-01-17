// Generated with util/create-component.js

type TextColor =
    | "primary"
    | "secondary"
    | "tertiary"
    | "footnote"
    | "highlight";

export interface HeadlineProps {
    variant?: "light" | "regular" | "bold" | "bolder";
    color?: TextColor;
    align?: "left" | "center" | "right";
}

export interface TitleProps {
    variant?: "light" | "regular" | "bold" | "bolder";
    color?: TextColor;
    align?: "left" | "center" | "right";
}

export interface SubtitleProps {
    variant?: "light" | "regular" | "bold" | "bolder";
    color?: TextColor;
    align?: "left" | "center" | "right";
}

export interface BodyProps {
    variant?: "regular" | "bold";
    color?: TextColor;
    align?: "left" | "center" | "right";
}

export interface FooterProps {
    variant?: "regular" | "bold";
    color?: TextColor;
    align?: "left" | "center" | "right";
}
