// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";
import { List } from "../../atoms";
import { NavLinksProps } from "./Navbar.types";

const NavbarContent = styled(({ className, children }) => (
    <nav className={`container ${className}`}>{children}</nav>
))`
    display: flex;
    font-size: 1rem;
    align-items: center;
    height: 60px;
    margin: auto;
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

const Navbar = styled(({ children }) => {
    return (
        <NavbarBackground>
            <NavbarContent>{children}</NavbarContent>
        </NavbarBackground>
    );
})``;

const NavLinks = styled(List).attrs<NavLinksProps>((props) => ({
    position: props.position,
}))<NavLinksProps>`
    display: flex;
    color: #fff;
    justify-content: ${({ position }) => {
        switch (position) {
            case "left":
                return "start";
            case "center":
                return "center";
            case "right":
                return "end";
        }
    }};
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
    border-radius: 0.5rem;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }

    background: ${({ selected, theme }) => {
        if (selected) {
            return theme.isDark ? "#00000080" : "#00007A";
        } else {
            return;
        }
    }};
`;

export default {
    Navbar,
    NavLinks,
    NavLink,
};
