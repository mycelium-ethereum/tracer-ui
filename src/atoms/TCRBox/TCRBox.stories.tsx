// Generated with util/create-component.js
import React from "react";
import TCRBox from "./TCRBox";
import { TCRBoxProps } from "./TCRBox.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/TCRBox",
    component: TCRBox,
    argTypes: {
        color: {
            defaultValue: "blue",
            control: {
                type: "select",
                options: ["purple", "blue", "green"],
            },
        },
    },
} as ComponentMeta<typeof TCRBox>;

// Create a master template for mapping args to render the TCRBox component
const Template: Story<TCRBoxProps> = (args) => <TCRBox {...args}></TCRBox>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    color: "blue",
};
