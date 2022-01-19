// Generated with util/create-component.js
import React from "react";
import Text from "./Text";
import { TextProps } from "./Text.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/Text",
    component: Text,
    argTypes: {
        weight: {
            control: {
                type: "select",
                options: ["light", "regular", "bold", "bolder"],
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
        font: {
            control: {
                type: "select",
                options: ["body", "heading"],
            },
            defaultValue: "body",
        },
        size: {
            control: {
                type: "select",
                options: ["footer", "body", "subtitle", "title", "headline"],
            },
            defaultValue: "body",
        },
        as: {
            control: false,
        },
    },
} as ComponentMeta<typeof Text>;

// Create a master template for mapping args to render the Text component
const Template: Story<TextProps> = (args) => <Text {...args}>Lorem Ipsum</Text>;

export const Body = Template.bind({});
Body.args = {
    size: "body",
    color: "primary",
    weight: "regular",
    align: "left",
    font: "body",
};

export const Footnote = Template.bind({});
Footnote.args = {
    color: "footnote",
    size: "footer",
};

export const Bold = Template.bind({});
Bold.args = {
    weight: "bold",
};

export const Faint = Template.bind({});
Faint.args = {
    color: "secondary",
    weight: "light",
};

export const Subtitle = Template.bind({});
Subtitle.args = {
    size: "subtitle",
    weight: "bold",
};

export const AltSubtitle = Template.bind({});
AltSubtitle.args = {
    size: "subtitle",
    font: "heading",
    color: "secondary",
};

export const Title = Template.bind({});
Title.args = {
    size: "title",
    weight: "bold",
};

export const Headline = Template.bind({});
Headline.args = {
    size: "headline",
    weight: "bolder",
};

export const TopMargin = Template.bind({});
TopMargin.args = {
    margin: "10px 0",
};

export const Link = Template.bind({});
Link.args = {
    as: "a",
    color: "highlight",
    href: "https://www.google.com",
};

export const Center = Template.bind({});
Center.args = {
    align: "center",
};

export const Right = Template.bind({});
Right.args = {
    align: "right",
};
