// Generated with util/create-component.js
import React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

import { ListProps } from "./List.types";

const List: React.FC<ListProps> = React.forwardRef((props, ref) => {
    const { children, onClickItem, separator, selectedItem, ...rest } = props;
    if (!children) return null;
    return (
        <StyledUnorderedList
            data-testid="list"
            ref={ref}
            {...(rest as StyledComponent<"ul", DefaultTheme, {}, never>)}
        >
            {React.Children.map(children, (child, index) => {
                if (!React.isValidElement(child)) return null;
                return (
                    <StyledListItem
                        key={index}
                        onClick={() => onClickItem && onClickItem(index)}
                        className={index === selectedItem ? 'selected' : ''}
                    >
                        {index > 0 && separator ? <hr /> : null}
                        {React.cloneElement(child, child.props)}
                    </StyledListItem>
                );
            })}
        </StyledUnorderedList>
    );
});
List.displayName = "List";

export default List;

const StyledUnorderedList = styled.ul`
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const StyledListItem = styled.li`
    display: block;

    & > hr {
        margin: 0;
        border: 0;
        border-top: 1px solid ${(props) => props.theme.colors.focus.active};
    }
`;
