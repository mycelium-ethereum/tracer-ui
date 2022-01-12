// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Popover, List, Text, Icon } from "../../atoms";

import { SearchableDropdownProps } from "./SearchableDropdown.types";

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
    placeholder,
    options,
    onClickItem,
}) => {
    const [searchWidth, setSearchWidth] = React.useState<number>();
    const [search, setSearch] = React.useState("");
    const [searchBarEl, setSearchBarEl] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        setSearchWidth(searchBarEl?.offsetWidth);
    }, [searchBarEl]);

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
            <List separator>
                {filteredOptions.map((option) => (
                    <ListItem
                        key={option.value}
                        onClick={() => onClickItem(option.value)}
                    >
                        <LeftImage src={option.imageSrc} />
                        <ContentContainer>
                            <ItemTitle>{option.title}</ItemTitle>
                            <Text.Footer>{option.subtitle}</Text.Footer>
                        </ContentContainer>

                        <RightContentContainer>
                            {option.rightContent}
                        </RightContentContainer>
                    </ListItem>
                ))}
            </List>
        </PopoverCard>
    );

    return (
        <div data-testid="SearchableDropdown">
            <Popover placement="bottom-start" content={<PopoverContent />}>
                <Input
                    ref={setSearchBarEl}
                    leftSlot={<Icon name="search" color="tertiary" />}
                    placeholder={placeholder}
                    value={search}
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
    padding: 8px;
    display: flex;
    :hover {
        background-color: ${(props) => props.theme.colors.cell.secondary};
    }
    cursor: pointer;
`;

const ItemTitle = styled(Text.Body)`
    font-weight: 500;
`;

const ContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const RightContentContainer = styled.div``;

const LeftImage = styled.img`
    margin: 0px 12px 0px 0px;
    max-width: 40px;
    max-height: 40px;
`;
