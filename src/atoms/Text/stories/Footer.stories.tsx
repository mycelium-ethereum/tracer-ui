// Generated with util/create-component.js
import React from "react";
import Text from "../Text";
import { FooterProps } from "../Text.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/Text/Footer",
    component: Text.Footer,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["regular", "bold"],
            },
        },
        color: {
            control: {
                type: "select",
                options: [
                    "primary",
                    "secondary",
                    "tertiary",
                    "footnote",
                    "highlight",
                ],
            },
            defaultValue: "primary",
        },
        align: {
            control: {
                type: "select",
                options: ["left", "center", "right"],
            },
            defaultValue: "left",
        },
        margin: {
            control: "text",
        },
    },
} as ComponentMeta<typeof Text.Title>;

// Create a master template for mapping args to render the Text component
const Template: Story<FooterProps> = (args) => (
    <Text.Footer {...args}>Lorem Ipsum</Text.Footer>
);

// Reuse that template for creating different stories
export const Regular = Template.bind({});
Regular.args = {
    variant: "regular",
};

export const Bold = Template.bind({});
Bold.args = {
    variant: "bold",
};
