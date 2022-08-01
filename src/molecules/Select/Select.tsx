// Generated with util/create-component.js
import React, { useEffect } from "react";
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
    className,
    emptyText,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const selectBoxRef = React.useRef<HTMLDivElement>(null);
    const selectRef = React.useRef<HTMLSelectElement>(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    function handleClickOutside(ev: MouseEvent) {
        const clickedSelectBox = selectBoxRef.current?.contains(
            ev.target as Node,
        );
        const clickedSelect = selectRef.current?.contains(ev.target as Node);
        if (!clickedSelectBox && !clickedSelect) {
            setIsOpen(false);
        }
    }

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
        <DropdownCard minWidth={selectBoxRef?.current?.offsetWidth}>
            <List separator>
                {(() => {
                    if (options.length === 0 && emptyText) {
                        return <EmptyText>{emptyText}</EmptyText>;
                    }
                })()}
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
        <Container className={className}>
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
    background-color: ${({ theme }) => theme.colors.cell.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    border: 1px solid ${({ theme }) => theme.colors.cell["highlight-stroke"]};
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
    minWidth: number;
};

const DropdownCard = styled.div<DropdownCardProps>`
    max-height: 300px;
    min-width: ${({ minWidth }) => minWidth}px;
    overflow-y: auto;
    border-radius: 0 0 16px 16px;
    background-color: ${({ theme }) => theme.colors.cell.primary};
    outline: 1px solid ${({ theme }) => theme.colors.cell["highlight-stroke"]};
    outline-offset: -1px;
`;

const ListItem = styled.div`
    background-color: ${({ theme }) => theme.colors.cell.primary};
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.cell.secondary};
    }
`;

const EmptyText = styled.div`
    background-color: ${({ theme }) => theme.colors.cell.primary};
    padding: 16px;
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.body};
    color: ${({ theme }) => theme.colors.text.tertiary};
`;
