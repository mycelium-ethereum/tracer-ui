// Generated with util/create-component.js

import { tracerIcons } from "./iconsConfig";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
    name: keyof typeof tracerIcons;
    color?: IconColor;
    size?: SizeProp;
    className?: string;
    id?: string;
}

export type IconColor =
    | "primary"
    | "secondary"
    | "tertiary"
    | "footnote"
    | "highlight"
    | "action-text"
    | "alert"
    | "danger"
    | "success"
    | "inherit";
