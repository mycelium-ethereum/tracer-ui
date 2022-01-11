// Generated with util/create-component.js
import React from "react";
import Icon from "./Icon";
import { IconProps } from "./Icon.types";
import { ComponentMeta, Story } from "@storybook/react";
import { tracerIcons } from "./iconsConfig";

export default {
    title: "atoms/Icon",
    component: Icon,
    argTypes: {
        name: {
            control: {
                type: "select",
                options: Object.keys(tracerIcons),
            },
            defaultValue: "check-circle",
        },
        size: {
            control: {
                type: "select",
                options: [
                    "xs",
                    "sm",
                    "md",
                    "lg",
                    "1x",
                    "2x",
                    "3x",
                    "4x",
                    "5x",
                    "6x",
                    "7x",
                    "8x",
                    "9x",
                    "10x",
                ],
            },
            defaultValue: "md",
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
                    "alert",
                    "danger",
                    "success",
                ],
            },
            defaultValue: "primary",
        },
    },
} as ComponentMeta<typeof Icon>;

// Create a master template for mapping args to render the Icon component
const Template: Story<IconProps> = (args) => <Icon {...args}></Icon>;

// Reuse that template for creating different stories
export const SmallCheckCircle = Template.bind({});
SmallCheckCircle.args = {
    name: "check-circle",
    size: "sm",
    color: "success",
};

export const LargeLock = Template.bind({});
LargeLock.args = {
    name: "lock",
    size: "lg",
    color: "alert",
};

export const HugeSearch = Template.bind({});
HugeSearch.args = {
    name: "search",
    size: "5x",
    color: "secondary",
};
