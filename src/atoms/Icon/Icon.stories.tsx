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
                type: "number",
            },
            defaultValue: "20",
        },
        color: {
            control: {
                type: "color",
            },
        },
    },
} as ComponentMeta<typeof Icon>;

// Create a master template for mapping args to render the Icon component
const Template: Story<IconProps> = (args) => <Icon {...args}></Icon>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
