// Generated with util/create-component.js
import React from "react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { ComponentMeta, Story } from "@storybook/react";
import { Text } from "../";

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
            defaultValue: "action",
            control: {
                type: "select",
                options: [
                    "action",
                    "cell",
                    "alert",
                    "danger",
                    "ghost",
                    "success",
                ],
            },
        },
    },
} as ComponentMeta<typeof Button>;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>;

// Reuse that template for creating different stories
export const Action = Template.bind({});
Action.args = {
    children: "Action Button",
    variant: "action",
};

export const ActionDisabled = Template.bind({});
ActionDisabled.args = {
    children: "Action Button",
    variant: "action",
    disabled: true,
};

export const Cell = Template.bind({});
Cell.args = {
    children: "Cell Button",
    variant: "cell",
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

export const Success = Template.bind({});
Success.args = {
    children: "Success Button",
    variant: "success",
};

export const Ghost = Template.bind({});
Ghost.args = {
    children: "Ghost Button",
    variant: "ghost",
};
