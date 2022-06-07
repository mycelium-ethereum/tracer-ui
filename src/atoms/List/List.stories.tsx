// Generated with util/create-component.js
import React from "react";
import List from "./List";
import { ListProps } from "./List.types";
import { ComponentMeta, Story } from "@storybook/react";
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
        itemPadding: {
            control: {
                type: "text",
            },
            defaultValue: "0",
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
            <Card color="secondary" padding="none">
                <List {...args}>
                    {listItems.map((item) => (
                        <span key={item} style={{ color: "#FFF" }}>
                            {item}
                        </span>
                    ))}
                </List>
            </Card>
        </div>
    );
};

export const Default = Template.bind({});

export const Separator = Template.bind({});
Separator.args = {
    separator: true,
};

export const Padding = Template.bind({});
Padding.args = {
    itemPadding: "10px",
    separator: true,
};
