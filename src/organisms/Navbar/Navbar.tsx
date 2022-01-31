// Generated with util/create-component.js
import React from "react";
import { device } from "../..//helpers";
import styled from "styled-components";
import { List } from "../../atoms";
import { NavLinksProps } from "./Navbar.types";
import { NavbarProps } from ".";
import HeaderSiteSwitcher from "./HeaderSiteSwitcher";

const Navbar: React.FC<NavbarProps> = ({
    children,
    links,
    activeLink,
    href,
}) => {
    return (
        <NavbarBackground>
            <NavbarContent>
                <HeaderSiteSwitcher href={href} />
                <NavLinks>
                    {links.map((link: string) => (
                        <NavLink selected={link === activeLink} key={link}>
                            {link}
                        </NavLink>
                    ))}
                </NavLinks>
                <NavChildren>{children}</NavChildren>
            </NavbarContent>
        </NavbarBackground>
    );
};

const NavbarContent = styled.nav`
    display: flex;
    font-size: 1rem;
    align-items: center;
    height: 60px;
    margin: auto;
    width: 100%;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;
    @media ${device.mobileL} {
        max-width: 540px;
    }
    @media ${device.tablet} {
        max-width: 720px;
    }
    @media ${device.laptop} {
        max-width: 960px;
    }
    @media ${device.desktop} {
        max-width: 1140px;
    }
    @media ${device.desktopL} {
        max-width: 1320px;
    }
`;

const NavbarBackground = styled.div`
    position: relative;
    background: ${({ theme }) => {
        console.log(theme);
        return theme.isDark ? "#111928" : "#00007A";
    }};
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("/general/nav-bg.svg");
`;

const NavLinks = styled(List)`
    display: flex;
    color: #fff;
    width: auto;
    flex: 1;
`;

const NavLink = styled.a.attrs<{
    selected: boolean;
}>((props) => ({
    ...props,
    selected: props.selected,
}))<{ selected: boolean }>`
    display: flex;
    transition: 0.3s;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 16px;
    font-family: ${(props) => props.theme.fontFamily.body};
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    text-decoration-line: ${(props) => (props.selected ? "underline" : "none")};
    text-underline-offset: 4px;
`;

const NavChildren = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default Navbar;
