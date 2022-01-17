// Generated with util/create-component.js
import React from "react";
import Text from "../Text";
import { HeadlineProps } from "../Text.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/Text/Headline",
    component: Text.Headline,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["regular", "light", "bold", "bolder"],
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
    },
} as ComponentMeta<typeof Text.Headline>;

// Create a master template for mapping args to render the Text component
const Template: Story<HeadlineProps> = (args) => (
    <Text.Headline {...args}>Lorem Ipsum</Text.Headline>
);

// Reuse that template for creating different stories
export const Light = Template.bind({});
Light.args = {
    variant: "light",
};

export const Regular = Template.bind({});
Regular.args = {
    variant: "regular",
};

export const Bold = Template.bind({});
Bold.args = {
    variant: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
    variant: "bolder",
};
