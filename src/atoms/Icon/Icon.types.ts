// Generated with util/create-component.js

import { tracerIcons } from "./iconsConfig";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
    name: keyof typeof tracerIcons;
    color?: IconColor;
    size?: SizeProp;
}

export type IconColor =
    | "primary"
    | "secondary"
    | "tertiary"
    | "footnote"
    | "highlight"
    | "alert"
    | "danger"
    | "success";
