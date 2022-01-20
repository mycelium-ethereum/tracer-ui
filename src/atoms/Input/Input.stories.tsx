// Generated with util/create-component.js
import React from "react";
import Input from "./Input";
import { InputProps } from "./Input.types";
import { ComponentMeta, Story } from "@storybook/react";
import { Icon } from "../Icon";

export default {
    title: "atoms/Input",
    component: Input,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["focus", "alert", "danger"],
            },
            defaultValue: "focus",
        },
        placeholder: {
            defaultValue: "Placeholder",
            control: { type: "text" },
        },
        leftSlot: {
            control: { type: "text" },
            defaultValue: "",
        },
        rightSlot: {
            control: { type: "text" },
            defaultValue: "",
        },
        disabled: {
            defaultValue: false,
            control: { type: "boolean" },
        },
        textAlign: {
            defaultValue: "left",
            control: {
                type: "select",
                options: ["left", "center", "right"],
            },
        },
    },
} as ComponentMeta<typeof Input>;

// Create a master template for mapping args to render the Input component
const Template: Story<InputProps> = (args) => <Input {...args}></Input>;

// Reuse that template for creating different stories
export const Focus = Template.bind({});
Focus.args = {
    variant: "focus",
    placeholder: "Focus Input",
};

export const Alert = Template.bind({});
Alert.args = {
    variant: "alert",
    placeholder: "Alert Input",
};

export const Danger = Template.bind({});
Danger.args = {
    variant: "danger",
    placeholder: "Danger Input",
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: "Disabled Input",
    disabled: true,
};

export const TextAlignCenter = Template.bind({});
TextAlignCenter.args = {
    placeholder: "Text Align Center",
    textAlign: "center",
};

export const TextAlignRight = Template.bind({});
TextAlignRight.args = {
    placeholder: "Right Aligned Input",
    textAlign: "right",
};

export const Currency = Template.bind({});
Currency.args = {
    leftSlot: "$",
    placeholder: "0.00",
};

export const Percentage = Template.bind({});
Percentage.args = {
    rightSlot: "%",
    placeholder: "0.00",
};

export const SearchBar = Template.bind({});
SearchBar.args = {
    placeholder: "Search",
    leftSlot: <Icon name="search" color="tertiary" />,
};
