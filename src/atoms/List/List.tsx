// Generated with util/create-component.js
import React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

import { ListProps } from "./List.types";

const List: React.FC<ListProps> = React.forwardRef((props, ref) => {
    const { children, onClickItem, separator, itemPadding, ...rest } = props;
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
                    >
                        {index > 0 && separator ? <hr /> : null}
                        <Child padding={itemPadding}>
                            {React.cloneElement(child, child.props)}
                        </Child>
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
        border-top: 1px solid
            ${(props) => props.theme.colors.cell["highlight-stroke"]};
    }
`;

type ChildProps = {
    padding?: string;
};

const Child = styled.div<ChildProps>`
    padding: ${(props) => props.padding || "0"};
`;
