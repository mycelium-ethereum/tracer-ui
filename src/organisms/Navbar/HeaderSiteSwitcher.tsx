// Generated with util/create-component.js
import React, { useState, useEffect } from "react";
import { Icon, IconProps, Text } from "../../atoms";
import { NavDropdownOption } from "../../molecules/NavDropdownOption";
import TracerLogo from "../../assets/tracer_logo.svg";
import styled from "styled-components";

import { HeaderSiteSwitcherProps } from "./Navbar.types";

const icons = [
    {
        text: "Website",
        href: "https://tracer.finance",
        logo: "web",
    },
    {
        text: "Twitter",
        href: "https://twitter.com/TracerDAO",
        logo: "twitter",
    },
    {
        text: "Discourse",
        href: "https://discourse.tracer.finance/",
        logo: "discourse",
    },
    {
        text: "Github",
        href: "https://github.com/tracer-protocol/",
        logo: "github",
    },
    {
        text: "Discord",
        href: "https://discord.gg/7rhrmYkAJs",
        logo: "discord",
    },
];

const DropdownContent = styled.div`
    position: relative;
    opacity: 0;
    transition: 0.3s;
`;

const DropdownItemContainer = styled.div`
    display: none;
`;

const Icons = styled.div`
    margin-top: 3rem;
`;

const ClickableIcon = styled.a`
    display: flex;
    align-items: center;
    margin-top: 1.25rem;
    text-decoration: none;
    width: fit-content;
    transition: 0.3s;

    &:hover {
        opacity: 0.7;
    }

    ${Text.Body} {
        color: #fff;
        margin-left: 0.25rem;
    }
`;

const SocialIcon = styled(Icon)`
    color: #fff;
    margin-right: 0.5rem;
`;

const Backdrop = styled.div`
    backdrop-filter: blur(8px);
    background: #0000b0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    position: absolute;
    z-index: -1;
`;

const Dropdown = styled.div`
    display: block;
    position: absolute;
    transform-origin: top left;
    z-index: 20;
    box-sizing: border-box;
    transition all 0.5s ease;
    width: 0;
    height: 0;
    top: 3rem;
    left: 0;
    padding: 0;

    &.open {
        width: 350px;
        height: 504px;
        padding: 2rem;

        ${DropdownContent} {
            opacity: 1;
            transition: opacity 0.5s ease;
            transition-delay: 0.35s;
        }

        ${DropdownItemContainer} {
            display: block;
        }
    }
`;

const LogoLink = styled.a`
    width: 6rem;
    height: auto;
    cursor: pointer;
    margin-right: 0.75rem;
`;

const Toggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
`;

const SpinningIcon = styled(Icon)`
    transition: 0.3s;
    margin-bottom: 0.1rem;

    &.open {
        transform: rotate(180deg);
    }
`;

const NavDropdown = styled(({ className, href }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line
        const handleClickOutside = (event: any) => {
            const dropdown = document.getElementById("site-switcher");
            if (dropdown) {
                console.debug("Closing site-switcher");
                if (!dropdown.contains(event.target)) {
                    setOpen(false);
                }
            }
        };
        if (!open) {
            document.removeEventListener("mousedown", handleClickOutside);
        } else {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div id="site-switcher" className={className}>
            <LogoLink href={href}>
                <TracerLogo className="logo" />
            </LogoLink>
            <Toggle
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen(!open);
                }}
            >
                <SpinningIcon
                    id="toggle"
                    className={`${open ? "open" : ""}`}
                    name="chevronDown"
                    color="inherit"
                    size="sm"
                />
            </Toggle>
            <Dropdown className={`${open ? "open" : ""}`}>
                <Backdrop />
                <DropdownContent>
                    <DropdownItemContainer>
                        <NavDropdownOption
                            href={"https://vote.tracer.finance/#/"}
                            label={"Perpetual Pools"}
                            boxColor={"purple"}
                        />
                        <NavDropdownOption
                            href={"https://vote.tracer.finance/#/"}
                            label={"Governance"}
                            boxColor={"green"}
                        />
                        <NavDropdownOption
                            href={"https://vote.tracer.finance/#/"}
                            label={"Documentation"}
                            boxColor={"blue"}
                        />
                        <Icons>
                            {icons.map((icon, i) => (
                                <ClickableIcon
                                    href={icon.href}
                                    rel="noreferrer"
                                    target="_blank"
                                    key={i}
                                >
                                    <span>
                                        <SocialIcon
                                            name={
                                                icon.logo as IconProps["name"]
                                            }
                                            size="sm"
                                        />
                                    </span>
                                    <span>
                                        <Text.Body fontFamily="heading">
                                            {icon.text}
                                        </Text.Body>
                                    </span>
                                </ClickableIcon>
                            ))}
                        </Icons>
                    </DropdownItemContainer>
                </DropdownContent>
            </Dropdown>
        </div>
    );
})<HeaderSiteSwitcherProps>`
    position: relative;
    display: flex;
`;
export default NavDropdown;
