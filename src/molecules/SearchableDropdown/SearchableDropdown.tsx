// Generated with util/create-component.js
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Input, Popover, List, Icon, InfoRow } from "../../atoms";

import { SearchableDropdownProps } from "./SearchableDropdown.types";

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
    placeholder,
    options,
    onClickItem,
    isDropdownOpen,
    emptyText,
    onFocusOut,
    ...rest
}) => {
    const [searchWidth, setSearchWidth] = React.useState<number>();
    const [search, setSearch] = React.useState("");
    const searchBarEl = useRef<HTMLInputElement | null>(null);
    const listEl = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        setSearchWidth(searchBarEl?.current.offsetWidth + 60);
    }, [searchBarEl]);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        const isListClicked = listEl?.current.contains(event.target as Node);
        const isSearchBarClicked = searchBarEl?.current.contains(
            event.target as Node,
        );
        if (!isListClicked && !isSearchBarClicked) {
            onFocusOut();
        }
    };

    const filteredOptions = React.useMemo(
        () => filterOptionsBySearch(search, options),
        [search, options],
    );

    function filterOptionsBySearch(
        searchText: string,
        options: SearchableDropdownProps["options"],
    ) {
        return options.filter((option) =>
            option.searchTerms.some((term) => term.includes(searchText)),
        );
    }

    const PopoverContent = () => (
        <PopoverCard minWidth={searchWidth}>
            <List separator ref={listEl}>
                {filteredOptions.map((option) => (
                    <ListItem
                        key={option.value}
                        onClick={() => onClickItem(option.value)}
                    >
                        <InfoRow
                            title={option.title}
                            subtitle={option.subtitle}
                            imageSrc={option.imageSrc}
                        >
                            {option.rightContent}
                        </InfoRow>
                    </ListItem>
                ))}
                {filteredOptions.length === 0 && emptyText && (
                    <EmptyText>{emptyText}</EmptyText>
                )}
            </List>
        </PopoverCard>
    );

    return (
        <div data-testid="SearchableDropdown">
            <Popover
                isOpen={isDropdownOpen}
                placement="bottom-start"
                content={<PopoverContent />}
            >
                <Input
                    ref={searchBarEl}
                    leftSlot={<Icon name="search" color="tertiary" />}
                    placeholder={placeholder}
                    value={search}
                    {...rest}
                    onChange={(e) => setSearch((e.target as any).value)}
                />
            </Popover>
        </div>
    );
};

export default SearchableDropdown;

type PopoverCardProps = {
    minWidth?: number;
};

const PopoverCard = styled.div<PopoverCardProps>`
    background-color: ${(props) => props.theme.colors.cell.background};
    border-radius: 0px 0px 16px 16px;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1),
        0px 10px 10px rgba(0, 0, 0, 0.04);
    min-width: ${(props) => props.minWidth || 0}px;
    overflow: hidden;
`;

const ListItem = styled.div`
    background-color: ${(props) => props.theme.colors.cell.primary};
    :hover {
        background-color: ${(props) => props.theme.colors.cell.secondary};
    }
    cursor: pointer;
`;

const EmptyText = styled.div`
    background-color: ${(props) => props.theme.colors.cell.primary};
    color: ${(props) => props.theme.colors.text.secondary};
    font-size: 14px;
    padding: 16px;
    text-align: center;
`;
