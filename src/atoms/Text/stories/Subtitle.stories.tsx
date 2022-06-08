// Generated with util/create-component.js
import React from "react";
import Text from "../Text";
import { SubtitleProps } from "../Text.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/Text/Subtitle",
    component: Text.Subtitle,
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
        margin: {
            control: "text",
            defaultValue: "0",
        },
        fontFamily: {
            control: {
                type: "select",
                options: ["body", "heading"],
            },
            defaultValue: "body",
        },
    },
} as ComponentMeta<typeof Text.Subtitle>;

// Create a master template for mapping args to render the Text component
const Template: Story<SubtitleProps> = (args) => (
    <Text.Subtitle {...args}>Lorem Ipsum</Text.Subtitle>
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
