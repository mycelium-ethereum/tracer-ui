// Generated with util/create-component.js
import React, { useState } from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const DropdownItems = styled.div`
    position: relative;
    visibility: hidden;
    opacity: 0;
    max-height: 0px;
    transition: max-height 0.6s ease;
`;

const DropdownItem = styled.div`
    cursor: pointer;
    padding: 10px 18px;

    &:not(:last-child) {
        border-bottom: 1px solid #666;
    }

    &:hover {
        color: white;
        background: #3a4143;
    }
`;

const DropdownPreview = styled.div`
    color: black;
    padding: 10px 16px;
    cursor: pointer;
    height: auto;
    transition: 0.3s;

    &:hover {
        color: gray;
        opacity: 0.8;
    }
    &:after {
        content: "";
        transition: all 0.3s;
        border: solid black;
        border-width: 0 1px 1px 0;
        float: right;
        margin-top: 8px;
        margin-right: 6px;
        padding: 5px;
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
    }
`;

const DropdownContainer = styled.div`
    position: relative;
    top: 50px;
    margin: 0 auto;
    // width: 220px;
    border: 1px solid #666;
    border-radius: 0.375rem;
    background: tranparent;

    &.active {
        ${DropdownPreview} {
            &:after {
                margin-top: 1px;
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
            }
        }
        ${DropdownItems} {
            visibility: visible;
            border-top: 1px solid #666;
            height: auto;
            max-height: 290px;
            opacity: 1;
            transition: max-height 0.7s, opacity 2s, visibility 3s ease;
        }
    }
`;
const Dropdown: React.FC<DropdownProps> = ({
    previewText,
    options,
    onClickOption,
}) => {
    const [open, setOpen] = useState(false);
    return (
        <DropdownContainer
            className={open ? "active" : ""}
            onClick={() => setOpen(!open)}
        >
            <DropdownPreview>{previewText}</DropdownPreview>
            <DropdownItems>
                {options.map((option) => (
                    <DropdownItem onClick={() => onClickOption(option)}>
                        {option}
                    </DropdownItem>
                ))}
            </DropdownItems>
        </DropdownContainer>
    );
};

export default Dropdown;
