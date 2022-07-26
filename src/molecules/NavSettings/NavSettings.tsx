// Generated with util/create-component.js
import React, {useRef, useState} from "react";

import SettingsSVG from '../../assets/icons/settings.svg';

import { NavSettingsProps } from "./NavSettings.types";

import styled from 'styled-components';
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { ToggleSwitch } from "../../atoms/ToggleSwitch";
import { NavPopout, NavPopoutOption } from "../../atoms/NavPopout";

export const ANIMATION_DURATION = 0.3;

export const StyledLink = styled.a.attrs({
    target: '_blank',
    rel: 'noopener noreferrer',
})``;

export const NavButton = styled.button<{ selected: boolean; navMenuOpen?: boolean }>`
    display: flex;
    height: 36px;
    width: 41px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-left: 16px;
    transition: all ${ANIMATION_DURATION}s ease;

    ${({ theme, selected, navMenuOpen }) => {
        switch (true) {
            case selected && navMenuOpen:
                return `
                    border: 1px solid #1c64f2;
                    background-color: ${!theme.isDark ? '#ffffff' : 'transparent'}
                `;
            case !selected && navMenuOpen:
                return `
                    border: 1px solid #ffffff;
                    background-color: #1c64f2;
                `;
            case selected && !navMenuOpen:
                return `
                    border: 1px solid #1c64f2;
                    background-color: #1c64f2;
                `;
            default:
                return `
                    border: 1px solid #1c64f2;
                    background-color: ${theme.isDark ? '#ffffff' : 'transparent'}
                `;
        }
    }}
`;

export const AppLaunchNavButton = styled(NavButton)`
    > span > span {
        ${({ selected, navMenuOpen }) => {
            switch (true) {
                case selected && navMenuOpen:
                    return `
                    background-color: #1c64f2;
                `;
                case !selected && navMenuOpen:
                    return `
                    background-color: #ffffff;
                `;
                case selected && !navMenuOpen:
                    return `
                    background-color: #ffffff;
                `;
                default:
                    return `
                    background-color: #1c64f2;
                `;
            }
        }}
    }

    /* Only allow hover effect on desktop */
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: #1c64f2 !important;
            color: #fff;
        }
        &:hover span > span {
            background-color: #fff;
        }
    }

    @media only screen and (max-width: 768px) {
        ${({ selected, navMenuOpen }) => {
            switch (true) {
                case selected && navMenuOpen:
                    return `
                    border: 1px solid #ffffff;
                    background-color: #ffffff;
                `;
                case !selected && navMenuOpen:
                    return `
                    border: 1px solid #ffffff;
                    background-color: #1c64f2;
                `;
                case selected && !navMenuOpen:
                    return `
                    border: 1px solid #ffffff;
                    background-color: #ffffff;
                `;
                default:
                    return `
                    border: 1px solid #1c64f2;
                    background-color: transparent;
                    transition: all ${ANIMATION_DURATION}s ease ${ANIMATION_DURATION}s;
                `;
            }
        }}
    }
`;

export const SettingsNavButton = styled(NavButton)`
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
                    background-color: #1c64f2;
                `;
            case !selected && navMenuOpen:
                return `
                    background-color: #1c64f2;
                    border: 1px solid #ffffff;
                `;
            case selected && !navMenuOpen:
                return `
                    background-color: #1c64f2;
                    color: #ffffff;
                `;
            default:
                return `
                    border: 1px solid #1c64f2;
                    color: #1c64f2;
                    background-color: ${!theme.isDark ? '#ffffff' : 'transparent'}
                `;
        }
    }}
`;

export const CubeGrid = styled.span`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 4px;
`;

export const Cube = styled.span`
    height: 4px;
    width: 4px;
    background-color: #1c64f2;
    transition: background-color ${ANIMATION_DURATION}s ease;
`;

export const PopoutContainer = styled.div`
    position: relative;
    font-size: 16px;
    line-height: 24px;
    font-family: 'Aileron', sans-serif;
`;


export const StyledSettingsPopout = styled(NavPopout)<{ isActive: boolean }>`
    padding-top: 16px;

    ${NavPopoutOption} {
        border-top: none;
    }

    ${NavPopoutOption}:nth-child(1) {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        margin-right: 6px;

        @media only screen and (min-width: 375px) {
            margin-right: 32px;
        }
        @media only screen and (min-width: 768px) {
            margin-right: 0;
        }
    }
    ${NavPopoutOption}:last-child {
        border: 1px solid rgba(28, 100, 242, 0.2);
        border-top: none;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    /* Active/inactive states */
    > div:nth-child(1) {
        transition-delay: ${({ isActive }) => (isActive ? '100ms' : '300ms')};
    }
    > div:nth-child(2) {
        transition-delay: 200ms;
    }
    > div:nth-child(3) {
        transition-delay: ${({ isActive }) => (isActive ? '300ms' : '100ms')};
    }

    @media only screen and (min-width: 1024px) {
        padding-top: 0px;
    }
`;

const NavSettings: React.FC<NavSettingsProps> = ({ navMenuOpen, setNavMenuOpen, showSettingsPopout, setShowSettingsPopout, children }) => {
    // closes navMenu when opening settingsPopout
    const handleToggle = () => {
        setShowSettingsPopout(!showSettingsPopout);
        setNavMenuOpen(false);
    };

    const handleClose = () => {
        setShowSettingsPopout(false);
    };

    const settingsContainerRef = useRef<HTMLDivElement>(null);
    useOutsideClick(settingsContainerRef, handleClose);

    return (
        <PopoutContainer ref={settingsContainerRef}>
            <SettingsNavButton onClick={handleToggle} selected={showSettingsPopout} navMenuOpen={navMenuOpen}>
                <SettingsSVG />
            </SettingsNavButton>
            <StyledSettingsPopout isActive={showSettingsPopout}>
                {children}
            </StyledSettingsPopout>
        </PopoutContainer>
    );
};

export default NavSettings;

