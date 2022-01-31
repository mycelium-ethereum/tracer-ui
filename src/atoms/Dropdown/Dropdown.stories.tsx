// Generated with util/create-component.js
import React from "react";
import { Dropdown } from "./";
import { DropdownProps } from "./Dropdown.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/Dropdown",
    component: Dropdown.ControlledDropdown,
    argTypes: {
        previewText: {
            type: "text",
        },
    },
} as ComponentMeta<typeof Dropdown.ControlledDropdown>;

const Options = ["Item 1", "Item 2", "Item 3"];

// Create a master template for mapping args to render the Dropdown component
const Template: Story<DropdownProps> = (args) => (
    <Dropdown.ControlledDropdown {...args}>
        <Dropdown.DropdownPreview>{"Click me"}</Dropdown.DropdownPreview>
        <Dropdown.DropdownItems>
            {Options.map((item) => (
                <Dropdown.DropdownItem>{item}</Dropdown.DropdownItem>
            ))}
        </Dropdown.DropdownItems>
    </Dropdown.ControlledDropdown>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
