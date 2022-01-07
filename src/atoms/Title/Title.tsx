// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { TitleProps } from "./Title.types";

const Title: React.FC<TitleProps> = ({ variant = "regular", children }) => (
    <StyledTitle data-testid="Title">{children}</StyledTitle>
);

export default Title;

const StyledTitle = styled.h1<TitleProps>`
    font-size: 20px;
`;
