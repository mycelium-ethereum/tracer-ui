// Generated with util/create-component.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconProps } from "./Icon.types";
import { tracerIcons } from "./iconsConfig";

const Icon: React.FC<IconProps> = ({ name, size, color = "black" }) => {
    const icon = tracerIcons[name];
    return (
        <FontAwesomeIcon
            data-testid="Icon"
            icon={icon}
            color={color}
            size={size}
        />
    );
};

export default Icon;
