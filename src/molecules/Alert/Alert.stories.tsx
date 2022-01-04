// Generated with util/create-component.js
import React from "react";
import Alert from "./Alert";
import { AlertProps } from "./Alert.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "molecules/Alert",
    component: Alert,
    argTypes: {},
} as ComponentMeta<typeof Alert>;

// Create a master template for mapping args to render the Alert component
const Template: Story<AlertProps> = (args) => <Alert {...args}></Alert>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    foo: "bar",
};
