// Generated with util/create-component.js
import React from "react";
import { device } from "../../helpers";
import styled from "styled-components";
import { List } from "../../atoms";
import { NavbarProps } from ".";
import HeaderSiteSwitcher from "./HeaderSiteSwitcher";
import navBg from "./nav-bg.png";

const Navbar = <Link extends string>({
    children,
    links,
    activeLink,
    homeHref,
    onClickLink,
}: NavbarProps<Link>): JSX.Element => {
    return (
        <NavbarBackground>
            <NavbarContent>
                <HeaderSiteSwitcher href={homeHref} />
                <NavLinks>
                    {links.map((link) => (
                        <NavLink
                            selected={link.href === activeLink}
                            key={link.href}
                            href={link.href}
                            onClick={() =>
                                onClickLink && onClickLink(link.href)
                            }
                        >
                            {link.label}
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
        return theme.isDark ? "#111928" : "#00007A";
    }};
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${navBg});
`;

const NavLinks = styled(List)`
    display: flex;
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
    color: ${({ theme }) => theme.colors.action.text} !important;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 16px;
    font-family: ${(props) => props.theme.fontFamily.heading} !important;
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
