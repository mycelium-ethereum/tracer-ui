// Generated with util/create-component.js
import React from "react";
import Text from "../Text";
import { TitleProps } from "../Text.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/Text/Title",
    component: Text.Title,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["regular", "light", "bold", "bolder"],
            },
        },
    },
} as ComponentMeta<typeof Text.Title>;

// Create a master template for mapping args to render the Text component
const Template: Story<TitleProps> = (args) => (
    <Text.Title {...args}>Lorem Ipsum</Text.Title>
);

// Reuse that template for creating different stories
export const Light = Template.bind({});
Light.args = {
    variant: "light",
};

export const Regular = Template.bind({});
Regular.args = {
    variant: "regular",
};

export const Bold = Template.bind({});
Bold.args = {
    variant: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
    variant: "bolder",
};
