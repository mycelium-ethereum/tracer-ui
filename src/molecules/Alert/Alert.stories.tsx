// Generated with util/create-component.js
import React from "react";
import Alert from "./Alert";
import { AlertProps } from "./Alert.types";
import { ComponentMeta, Story } from "@storybook/react";
import { tracerIcons } from "../../atoms/Icon/iconsConfig";

export default {
    title: "molecules/Alert",
    component: Alert,
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["danger", "success", "alert"],
            },
        },
        icon: {
            control: {
                type: "select",
                options: Object.keys(tracerIcons),
            },
        },
        children: {
            control: {
                type: "text",
            },
        },
    },
} as ComponentMeta<typeof Alert>;

// Create a master template for mapping args to render the Alert component
const Template: Story<AlertProps> = (args) => <Alert {...args}></Alert>;

// Reuse that template for creating different stories
export const Danger = Template.bind({});
Danger.args = {
    color: "danger",
    icon: "exclamationCircle",
    children: "This is a danger alert, something is wrong!",
};

export const Warning = Template.bind({});
Warning.args = {
    color: "alert",
    icon: "lock",
    children: "This is indicating that something is locked",
};

export const Success = Template.bind({});
Success.args = {
    color: "success",
    icon: "check-circle-solid",
    children: "This is a success alert, everything is okay!",
};
