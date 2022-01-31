// Generated with util/create-component.js
import React from "react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/Dropdown",
    component: Dropdown,
    argTypes: {
        previewText: {
            defaultValue: "Click Me",
            control: { type: "text" },
        },
        options: {
            defaultValue: ["Item 1", "Item 2", "Item 3"],
            control: { type: "array" },
        },
    },
} as ComponentMeta<typeof Dropdown>;

// Create a master template for mapping args to render the Dropdown component
const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
