// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { ListProps } from "./List.types";

const List: React.FC<ListProps> = ({
    children,
    onClickItem,
    separator,
    checkered,
}) => {
    if (!children) return null;
    return (
        <StyledUnorderedList data-testid="list">
            {React.Children.map(children, (child, index) => {
                if (!React.isValidElement(child)) return null;
                return (
                    <StyledListItem
                        key={index}
                        altColor={checkered && index % 2 === 1}
                        onClick={() => onClickItem(index)}
                    >
                        {index > 0 && separator ? <hr /> : null}
                        {React.cloneElement(child, child.props)}
                    </StyledListItem>
                );
            })}
        </StyledUnorderedList>
    );
};

export default List;

const StyledUnorderedList = styled.ul`
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
`;

type StyledListItemProps = {
    altColor?: boolean;
};

const StyledListItem = styled.li<StyledListItemProps>`
    display: block;
    background-color: ${(props) =>
        props.altColor
            ? props.theme.colors.cell.highlight
            : props.theme.colors.cell.active};

    & > hr {
        margin: 0;
        border: 0;
        border-top: 1px solid ${(props) => props.theme.colors.cell.border};
    }
`;
