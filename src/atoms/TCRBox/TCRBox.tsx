// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";
import BoxIcon from "./BoxIcon.svg";

import { TCRBoxProps } from "./TCRBox.types";

const TCRBox = styled(({ className }) => (
    <BoxIcon className={className} />
))<TCRBoxProps>`
    height: 48px;
    width: 48px;
    color: ${({ color }) => {
        switch (color) {
            case "green":
                return "#1AAA8D";
            case "purple":
                return "#7912fc";
            case "blue":
                return "#1e5cf5";
            default:
                return "#000";
        }
    }};
`;

export default TCRBox;
