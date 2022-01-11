// Generated with util/create-component.js
import React from "react";
import Input from "./Input";
import { InputProps } from "./Input.types";
import { ComponentMeta, Story } from "@storybook/react";
import { tracerIcons } from "../Icon/iconsConfig";

export default {
    title: "atoms/Input",
    component: Input,
    argTypes: {
        placeholder: {
            defaultValue: "Placeholder",
            control: { type: "text" },
        },
        icon: {
            control: { type: "select" },
            options: Object.keys(tracerIcons),
        },
        disabled: {
            defaultValue: false,
            control: { type: "boolean" },
        },
    },
} as ComponentMeta<typeof Input>;

// Create a master template for mapping args to render the Input component
const Template: Story<InputProps> = (args) => <Input {...args}></Input>;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

export const SearchBar = Template.bind({});
SearchBar.args = {
    icon: "search",
    placeholder: "Search",
};
