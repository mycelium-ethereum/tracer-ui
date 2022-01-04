// Generated with util/create-component.js
import React from "react";
import List from "./List";
import { ListProps } from "./List.types";
import { ComponentMeta, Story } from "@storybook/react";
import styled from "styled-components";

export default {
    title: "atoms/List",
    component: List,
    argTypes: {},
} as ComponentMeta<typeof List>;

// Create a master template for mapping args to render the List component
const Template: Story<ListProps> = (args) => {
    const listItems: string[] = [];
    for (let i = 0; i < 10; i++) {
        listItems.push(`Item number ${i}`);
    }
    return (
        <List {...args}>
            {listItems.map((item) => (
                <ListItem>{item}</ListItem>
            ))}
        </List>
    );
};

const ListItem = styled.span`
    display: block;
    color: ${(props) => props.theme.colors.text.active};
    padding: 0.5rem;
`;

export const Default = Template.bind({});

export const Separator = Template.bind({});
Separator.args = {
    separator: true,
};

export const Checkered = Template.bind({});
Checkered.args = {
    checkered: true,
};
