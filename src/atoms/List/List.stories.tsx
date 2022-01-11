// Generated with util/create-component.js
import React from "react";
import List from "./List";
import { ListProps } from "./List.types";
import { ComponentMeta, Story } from "@storybook/react";
import styled from "styled-components";
import { Card } from "..";

export default {
    title: "atoms/List",
    component: List,
    argTypes: {
        separator: {
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof List>;

// Create a master template for mapping args to render the List component
const Template: Story<ListProps> = (args) => {
    const listItems: string[] = [];
    for (let i = 0; i < 10; i++) {
        listItems.push(`Item number ${i}`);
    }
    return (
        <div style={{ width: "500px" }}>
            <Card padding="none">
                <List {...args}>
                    {listItems.map((item, idx) => (
                        <ListItem key={idx}>{item}</ListItem>
                    ))}
                </List>
            </Card>
        </div>
    );
};

const ListItem = styled.span`
    display: block;
    color: ${(props) => props.theme.colors.text.active};
    padding: 0.5rem 1rem;
`;

export const Default = Template.bind({});

export const Separator = Template.bind({});
Separator.args = {
    separator: true,
};
