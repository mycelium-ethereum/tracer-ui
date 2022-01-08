// Generated with util/create-component.js
import React from "react";
import SvgIcons from "./svgs";

import { IconProps } from "./Icon.types";

const Icon: React.FC<IconProps> = ({ name, size = "20", color = "black" }) => {
    const IconComponent = SvgIcons[name];
    return <IconComponent size={size} color={color} />;
};

export default Icon;
