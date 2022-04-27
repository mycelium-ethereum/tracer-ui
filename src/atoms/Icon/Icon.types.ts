// Generated with util/create-component.js

import { tracerIcons } from "./iconsConfig";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

// NOTE we can accept all FontAwesomeIconProps here with extends FontAwesomeIconProps
export interface IconProps {
    name: keyof typeof tracerIcons;
    color?: IconColor;
    size?: SizeProp;
    className?: string;
    id?: string;
    rotation?: FontAwesomeIconProps['rotation']
}

export type IconColor =
    | "primary"
    | "secondary"
    | "tertiary"
    | "footnote"
    | "highlight"
    | "action-text"
    | "focus-text"
    | "alert"
    | "danger"
    | "success"
    | "inherit";
