// Generated with util/create-component.js
import React from "react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/Button",
    component: Button,
    argTypes: {
        children: {
            defaultValue: "Button Text",
            control: { type: "text" },
        },
        disabled: {
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
        variant: {
            defaultValue: "primary",
            control: {
                type: "select",
                options: ["primary", "focus", "alert", "danger"],
            },
        },
    },
} as ComponentMeta<typeof Button>;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    children: "Primary Button",
    variant: "primary",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    children: "Primary Button",
    variant: "primary",
    disabled: true,
};

export const Focus = Template.bind({});
Focus.args = {
    children: "Focus Button",
    variant: "focus",
};

export const FocusDisabled = Template.bind({});
FocusDisabled.args = {
    children: "Focus Button",
    variant: "focus",
    disabled: true,
};

export const Alert = Template.bind({});
Alert.args = {
    children: "Alert Button",
    variant: "alert",
};

export const Danger = Template.bind({});
Danger.args = {
    children: "Danger Button",
    variant: "danger",
};
