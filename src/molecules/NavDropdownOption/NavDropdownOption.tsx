// Generated with util/create-component.js
import React from "react";
import { TCRBox } from "../../atoms/TCRBox";
import styled from "styled-components";
import Text from "../../atoms/Text/Text";
import { NavDropdownOptionProps } from "./NavDropdownOption.types";

const NavDropdownOption = styled(({ href, label, boxColor, className }) => (
    <a className={className} href={href} rel="noreferrer" target="_blank">
        <TCRBox color={boxColor} />
        <span className="text">
            <Text.Body>Tracer</Text.Body>
            <Text.Body variant="bold">{label}</Text.Body>
        </span>
    </a>
))<NavDropdownOptionProps>`
    display: flex;
    width: fit-content;
    padding-right: 0.5rem;
    margin-bottom: 1.5rem;
    transition: 0.3s;
    border-radius: 0.5rem;
    text-decoration: none;
    &:hover {
        background: #00007a80;
    }

    .text {
        margin: auto 0 auto 0.5rem;
        ${Text.Body} {
            color: white;
        }
    }
`;

export default NavDropdownOption;
