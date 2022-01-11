// Generated with util/create-component.js
import React from "react";
import Text from "../Text";
import { BodyProps } from "../Text.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/Text/Body",
    component: Text.Body,
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
    },
} as ComponentMeta<typeof Text.Body>;

// Create a master template for mapping args to render the Text component
const Template: Story<BodyProps> = (args) => (
    <Text.Body {...args}>Lorem Ipsum</Text.Body>
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
