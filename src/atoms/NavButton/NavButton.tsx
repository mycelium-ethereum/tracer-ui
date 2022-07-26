// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { NavButtonProps } from "./NavButton.types";

export const StyledNavButton = styled.button<NavButtonProps>`
    display: flex;
    height: 36px;
    width: 41px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-left: 16px;
    transition: all ${({ theme }) => theme.animationSpeed.default}s ease;

    cursor: pointer;

    /* Only allow hover effect on desktop */
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: #1c64f2 !important;
            color: #fff;
        }
    }

    ${({ theme, selected, navMenuOpen }) => {
        switch (true) {
            case selected && navMenuOpen:
                return `
                    border: 1px solid #1c64f2;
                    background-color: #ffffff;
                    color: #1c64f2;
                `;
            case !selected && navMenuOpen:
                return `
                    border: 1px solid #ffffff;
                    background-color: #1c64f2;
                    color: #ffffff;
                `;
            case selected && !navMenuOpen:
                return `
                    background-color: #1c64f2;
                    border: 1px solid #1c64f2;
                    color: #ffffff;
                `;
            default:
                return `
                    border: 1px solid #1c64f2;
                    color: #1c64f2;
                    background-color: ${
                        !theme.isDark ? "#ffffff" : "transparent"
                    }
                `;
        }
    }}
`;

const NavButton: React.FC<NavButtonProps> = ({
    selected,
    navMenuOpen,
    children,
    ...args
}) => (
    <StyledNavButton {...args} selected={selected} navMenuOpen={navMenuOpen}>
        {children}
    </StyledNavButton>
);

export default NavButton;
