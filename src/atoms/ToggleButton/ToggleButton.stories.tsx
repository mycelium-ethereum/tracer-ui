// Generated with util/create-component.js
import React from "react";
import ToggleButton from "./ToggleButton";
import { ToggleButtonProps } from "./ToggleButton.types";
import { ComponentMeta, Story } from "@storybook/react";
import { useArgs } from "@storybook/addons";

export default {
    title: "atoms/ToggleButton",
    component: ToggleButton,
    argTypes: {
        children: {
            defaultValue: "Button Text",
            control: { type: "text" },
        },
        disabled: {
            defaultValue: false,
            control: { type: "boolean" },
        },
        checked: {
            defaultValue: false,
            control: { type: "boolean" },
        },
        size: {
            defaultValue: "medium",
            control: {
                type: "select",
                options: ["small", "medium", "large"],
            },
        },
    },
} as ComponentMeta<typeof ToggleButton>;

// Create a master template for mapping args to render the ToggleButton component
const Template: Story<ToggleButtonProps> = ({ onChange, ...args }) => {
    const [{ checked }, updateArgs] = useArgs();
    return (
        <ToggleButton
            {...args}
            checked={checked}
            onChange={(newVal) => {
                onChange(newVal);
                updateArgs({ checked: newVal });
            }}
        ></ToggleButton>
    );
};

// Reuse that template for creating different stories
export const Checked = Template.bind({});
Checked.args = {
    children: "Button Text",
    checked: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
    children: "Button Text",
    checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: "Button Text",
    disabled: true,
};
