// Generated with util/create-component.js
import React from "react";
import Textarea from "./Textarea";
import { TextareaProps } from "./Textarea.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/Textarea",
    component: Textarea,
    argTypes: {
        placeholder: {
            defaultValue: "Placeholder",
            control: { type: "text" },
        },
        disabled: {
            defaultValue: false,
            control: { type: "boolean" },
        },
        variant: {
            control: {
                type: "select",
                options: ["primary", "secondary", "alert", "danger"],
            },
            defaultValue: "primary",
        },
    },
} as ComponentMeta<typeof Textarea>;

// Create a master template for mapping args to render the Textarea component
const Template: Story<TextareaProps> = (args) => (
    <Textarea {...args}></Textarea>
);

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
