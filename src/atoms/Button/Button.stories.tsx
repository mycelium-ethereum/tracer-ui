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
                options: ["action", "focus", "alert", "danger", "ghost"],
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

export const Ghost: Story<ButtonProps> = (args) => (
    <>
        <Text.Body>Meant for use against dark backgrounds</Text.Body>
        <div
            style={{
                backgroundColor: "darkblue",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Button {...args}></Button>
        </div>
    </>
);
Ghost.args = {
    children: "Ghost Button",
    variant: "ghost",
};
