// Generated with util/create-component.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { IconColor, IconProps } from "./Icon.types";
import { tracerIcons } from "./iconsConfig";
import { useTheme } from "styled-components";

const Icon = styled(({ name, size, color = "primary", className }) => {
    const icon = tracerIcons[name];
    const theme = useTheme();

    function resolveColor(color: IconColor) {
        switch (color) {
            case "primary":
                return theme.colors.text.primary;
            case "secondary":
                return theme.colors.text.secondary;
            case "tertiary":
                return theme.colors.text.tertiary;
            case "footnote":
                return theme.colors.text.footnote;
            case "highlight":
                return theme.colors.text.highlight;
            case "action-text":
                return theme.colors.action.text;
            case "focus-text":
                return theme.colors.focus.text;
            case "alert":
                return theme.colors.alert.text;
            case "danger":
                return theme.colors.danger.text;
            case "success":
                return theme.colors.success.text;
            case "inherit":
                return "inherit";
            default:
                return theme.colors.text.primary;
        }
    }
    return (
        <FontAwesomeIcon
            data-testid="Icon"
            icon={icon}
            color={resolveColor(color)}
            size={size}
            className={className}
        />
    );
})<IconProps>``;

export default Icon;
