// Generated with util/create-component.js

import { DefaultTheme, StyledComponent } from "styled-components";

type TextColor =
    | "primary"
    | "secondary"
    | "tertiary"
    | "footnote"
    | "highlight";

type TextSize = "footer" | "body" | "subtitle" | "title" | "headline";

export interface TextProps {
    size?: TextSize;
    weight?: "light" | "regular" | "bold" | "bolder";
    color?: TextColor;
    align?: "left" | "center" | "right";
    margin?: string;
    font?: "body" | "heading";
    as?: string;
}
