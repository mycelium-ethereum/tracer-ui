// Generated with util/create-component.js
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Popover, Button, Card, Icon, List } from "../../atoms";

import { NavDropdownButtonProps } from "./NavDropdownButton.types";

const NavDropdownButton: React.FC<NavDropdownButtonProps> = ({
    children,
    dropdownItems,
    placement,
    onItemClick,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const buttonRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    function handleClickOutside(ev: MouseEvent) {
        const clickedButton = buttonRef.current?.contains(ev.target as Node);
        const clickedDropdown = dropdownRef.current?.contains(
            ev.target as Node,
        );
        if (!clickedButton && !clickedDropdown) {
            setIsOpen(false);
        }
    }

    const DropdownContent = (
        <div ref={dropdownRef}>
            <DropdownCard padding="none">
                <List>
                    {dropdownItems.map((item) => (
                        <DropdownItem
                            key={item.key}
                            onClick={() => onItemClick(item.key)}
                        >
                            {item.content}
                        </DropdownItem>
                    ))}
                </List>
            </DropdownCard>
        </div>
    );

    return (
        <Popover
            content={DropdownContent}
            isOpen={isOpen}
            placement={placement || "bottom"}
        >
            <div ref={buttonRef}>
                <Button
                    variant="ghost"
                    size="small"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>
                        {children}
                        &nbsp;&nbsp;
                        <ButtonIcon
                            isOpen={isOpen}
                            name="chevronDown"
                            color="action-text"
                        />
                    </span>
                </Button>
            </div>
        </Popover>
    );
};

export default NavDropdownButton;

const DropdownCard = styled(Card)`
    margin: 8px 0;
    overflow: hidden;
    width: auto;
    border-radius: 8px;
`;

const DropdownItem = styled.div`
    padding: 8px 16px;
    cursor: pointer;
    font-family: ${(props) => props.theme.fontFamily.heading};
    color: ${(props) => props.theme.colors.text.secondary};
    &:hover {
        background: ${(props) => props.theme.colors.cell.secondary};
    }
`;

const ButtonIcon = styled(Icon)<{ isOpen: boolean }>`
    margin-left: 0.5rem;
    transition: 0.2s ease-in-out;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
