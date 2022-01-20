// Generated with util/create-component.js
import React from "react";
import NavDropdownOption from "./NavDropdownOption";
import { NavDropdownOptionProps } from "./NavDropdownOption.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "molecules/NavDropdownOption",
    component: NavDropdownOption,
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
    argTypes: {
        boxColor: {
            defaultValue: "blue",
            control: {
                type: "select",
                options: ["purple", "blue", "green"],
            },
        },
        label: {
            defaultValue: "Tracer Product",
            control: { type: "text" },
        },
        href: {
            defaultValue: "https://tracer.finance",
            control: { type: "text" },
        },
    },
} as ComponentMeta<typeof NavDropdownOption>;

// Create a master template for mapping args to render the NavDropdownOption component
const Template: Story<NavDropdownOptionProps> = (args) => (
    <NavDropdownOption {...args}></NavDropdownOption>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    label: "Tracer Product",
    boxColor: "blue",
    href: "https://tracer.finance",
};
