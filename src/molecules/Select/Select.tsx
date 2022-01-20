// Generated with util/create-component.js
import React from "react";
import { Icon, Popover, InfoRow, List } from "../../atoms";
import styled from "styled-components";

import { SelectProps } from "./Select.types";

const Select: React.FC<SelectProps> = ({
    placeholder,
    value,
    options,
    onChange,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const selectRef = React.useRef<HTMLDivElement>(null);

    const selectedOption = options.find((option) => option.value === value);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectOption = (value: string) => {
        onChange && onChange(value);
        setIsOpen(false);
    };

    const DropdownContent = (
        <DropdownCard width={selectRef?.current?.offsetWidth}>
            <List separator>
                {options.map((option) => (
                    <ListItem
                        key={option.value}
                        onClick={() => handleSelectOption(option.value)}
                    >
                        <InfoRow
                            key={option.value}
                            title={option.title}
                            subtitle={option.subtitle}
                            imageSrc={option.imageSrc}
                        >
                            {option.rightContent}
                        </InfoRow>
                    </ListItem>
                ))}
            </List>
        </DropdownCard>
    );
    return (
        <Popover
            content={DropdownContent}
            isOpen={isOpen}
            placement="bottom-start"
        >
            <SelectBox
                data-testid="Select"
                ref={selectRef}
                onClick={toggleDropdown}
                squareBottom={isOpen}
            >
                {selectedOption?.title || placeholder}
                <IconBox>
                    <Icon name="chevronDown" />
                </IconBox>
            </SelectBox>
        </Popover>
    );
};

export default Select;

type SelectBoxProps = {
    squareBottom?: boolean;
};

const SelectBox = styled.div<SelectBoxProps>`
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.cell.primary};
    border: 1px solid ${({ theme }) => theme.colors.focus.active};
    border-radius: ${({ squareBottom }) =>
        squareBottom ? "12px 12px 0 0" : "12px"};
    padding: 9px 17px;
    cursor: pointer;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
`;

const IconBox = styled.div`
    position: absolute;
    right: 17px;
    top: 50%;
    transform: translateY(-50%);
`;

type DropdownCardProps = {
    width: number;
};

const DropdownCard = styled.div<DropdownCardProps>`
    max-height: 300px;
    width: ${({ width }) => width}px;
    overflow-y: auto;
    border-radius: 0 0 16px 16px;
    background-color: ${({ theme }) => theme.colors.cell.primary};
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1),
        0px 10px 10px rgba(0, 0, 0, 0.04);
`;

const ListItem = styled.div`
    background-color: ${({ theme }) => theme.colors.cell.primary};
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.cell.secondary};
    }
`;
