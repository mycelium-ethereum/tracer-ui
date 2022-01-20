// Generated with util/create-component.js
import React, { useState, useEffect } from "react";
import { Icon, Text } from "../../atoms";
import {NavDropdownOption} from "../../molecules/NavDropdownOption";
import { ReactComponent as TracerLogo } from "../../assets/tracer_logo.svg";
import styled from 'styled-components';

import { HeaderSiteSwitcherProps } from "./Navbar.types";

const icons = [
    {
        text: 'Website',
        href: 'https://tracer.finance',
        logo:  'web',
    },
    {
        text: 'Twitter',
        href: 'https://twitter.com/TracerDAO',
        logo: 'twitter'
    },
    {
        text: 'Discourse',
        href: 'https://discourse.tracer.finance/',
        logo: 'discourse',
    },
    {
        text: 'Github',
        href: 'https://github.com/tracer-protocol/',
        logo: 'github'
    },
    {
        text: 'Discord',
        href: 'https://discord.gg/7rhrmYkAJs',
        logo: 'discord'
    },
];

const DropdownContent = styled.div`
    position: relative;
    margin: 1rem 0;
    opacity: 0;
    transition: 0.3s; 
    transition-delay: 0.5s;
`

const Icons = styled.div`
    margin-top: 3rem;

`

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
    ${Icon} {
        color: #fff;
    }

`

const Backdrop = styled.div`
    backdrop-filter: blur(8px);
    background: #0000B0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    position: absolute;
    z-index: -1;
`


const Dropdown = styled.div`
    display: block;
    position: absolute;
    transform-origin: top left;
    z-index: 20;
    box-sizing: border-box;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 700ms;
    width: 350px;
    padding: 0 1rem;
    top: 3rem;
    left: 0;
    transform: scale(0);

    &.open {
        transform: scale(1);

        ${DropdownContent} {
            opacity: 1;
        }
    }
`

const TCRLogo = styled(TracerLogo)`
    width: 6rem;
    height: auto;
    cursor: pointer;
    margin-right: 0.75rem;
`

const Toggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;

    ${Icon} {
        transition: 0.3s;
        margin-bottom: 0.1rem;
    }

    ${Icon}.open {
        transform: rotate(180deg);
    }

`

const NavDropdown = styled(({ className }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: any) => { // eslint-disable-line
            const dropdown = document.getElementById('site-switcher');
            if (dropdown) {
                console.debug('Closing site-switcher');
                if (!dropdown.contains(event.target)) {
                    setOpen(false);
                }
            }
        };
        if (!open) {
            document.removeEventListener('mousedown', handleClickOutside);
        } else {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <div id="site-switcher" className={className}>
            <a href="/">
                <TCRLogo
                    className="logo"
                    alt="Tracer Logo"
                />
            </a>
            <Toggle
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen(!open);
                }}
            >
                <Icon 
                    id="toggle"
                    className={`${open ? 'open' : ''}`}
                    name="down-chevron" 
                    color="inherit"
                    size="sm" 
                />
            </Toggle>
            <Dropdown
                className={`${open ? 'open' : ''}`}
            >
                <Backdrop />
                <DropdownContent>
                    <NavDropdownOption href={'https://vote.tracer.finance/#/'} label={'Perpetual Pools'} boxColor={'purple'} />
                    <NavDropdownOption href={'https://vote.tracer.finance/#/'} label={'Governance'} boxColor={'green'} />
                    <NavDropdownOption href={'https://vote.tracer.finance/#/'} label={'Documentation'} boxColor={'blue'} />
                    <Icons>
                        {icons.map((icon, i) => (
                            <ClickableIcon
                                href={icon.href}
                                rel="noreferrer"
                                target="_blank"
                                key={i}
                            >
                                <span><Icon name={icon.logo} size="sm"/></span>
                                <span><Text.Body>{icon.text}</Text.Body></span>
                            </ClickableIcon>
                        ))}
                    </Icons>
                </DropdownContent>
            </Dropdown>
        </div>
    )
})<HeaderSiteSwitcherProps>`
    position: relative;
    display: flex;
`
export default NavDropdown;
