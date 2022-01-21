// Generated with util/create-component.js
import React from "react";
import { Icon, Popover, InfoRow, List } from "../../atoms";
import styled from "styled-components";

import { SelectProps } from "./Select.types";

const Select: React.FC<SelectProps> = ({
    placeholder,
    value,
    options,
    disabled,
    form,
    name,
    onChange,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const selectBoxRef = React.useRef<HTMLDivElement>(null);
    const selectRef = React.useRef<HTMLSelectElement>(null);

    const selectedOption = options.find((option) => option.value === value);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectBoxClick = () => {
        if (disabled) return;
        toggleDropdown();
    };

    const handleSelectOption = (value: string) => {
        // Change the value of the select
        const ev = new Event("change", { bubbles: true });
        (ev as any).simulated = true;
        selectRef.current.value = value;
        selectRef.current.dispatchEvent(ev);
        setIsOpen(false);
    };

    const DropdownContent = (
        <DropdownCard width={selectBoxRef?.current?.offsetWidth}>
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
        <Container>
            <Popover
                content={DropdownContent}
                isOpen={isOpen}
                placement="bottom-start"
            >
                <SelectBox
                    data-testid="Select"
                    ref={selectBoxRef}
                    onClick={handleSelectBoxClick}
                    squareBottom={isOpen}
                    disabled={disabled}
                >
                    {selectedOption?.title || placeholder}
                    <IconBox>
                        <Icon
                            name="chevronDown"
                            color={disabled ? "tertiary" : "primary"}
                        />
                    </IconBox>
                </SelectBox>
            </Popover>
            <select
                ref={selectRef}
                defaultValue={value}
                onChange={onChange}
                name={name}
                form={form}
                disabled={disabled}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.title}
                    </option>
                ))}
            </select>
        </Container>
    );
};

export default Select;

const Container = styled.div`
    & > select {
        display: none;
    }
`;

type SelectBoxProps = {
    squareBottom?: boolean;
    disabled?: boolean;
};

const SelectBox = styled.div<SelectBoxProps>`
    position: relative;
    width: 100%;
    background-color: ${({ theme, disabled }) =>
        disabled ? theme.colors.cell.tertiary : theme.colors.cell.primary};
    color: ${({ theme, disabled }) =>
        disabled ? theme.colors.text.tertiary : theme.colors.text.primary};
    border: 1px solid ${({ theme }) => theme.colors.focus.active};
    border-radius: ${({ squareBottom }) =>
        squareBottom ? "12px 12px 0 0" : "12px"};
    padding: 9px 17px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
    user-select: none;
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
