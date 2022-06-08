// Generated with util/create-component.js
import React from "react";
import NavDropdownButton from "./NavDropdownButton";
import { NavDropdownButtonProps } from "./NavDropdownButton.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "molecules/NavDropdownButton",
    component: NavDropdownButton,
    argTypes: {
        placement: {
            control: {
                type: "select",
                options: ["bottom", "bottom-start", "bottom-end"],
            },
            defaultValue: "bottom",
        },
        children: {
            control: { type: "text" },
            defaultValue: "Button Text",
        },
    },
} as ComponentMeta<typeof NavDropdownButton>;

// Create a master template for mapping args to render the NavDropdownButton component
const Template: Story<NavDropdownButtonProps> = (args) => (
    <NavDropdownButton {...args}></NavDropdownButton>
);

// Reuse that template for creating different stories
export const Networks = Template.bind({});
Networks.args = {
    children: "Networks",
    dropdownItems: [
        { key: "arbitrum", content: "Arbitrum" },
        { key: "mainnet", content: "Ethereum" },
        { key: "arb-rinkeby", content: "Arbitrum Rinkeby" },
    ],
};

export const LongText = Template.bind({});
LongText.args = {
    children: "Long Text",
    dropdownItems: [
        { key: "lorem", content: "Lorem Ipsu Illit Dolcit" },
        {
            key: "shakespeare",
            content: "Shall I compare thee to a summer's day",
        },
    ],
};

export const BottomStart = Template.bind({});
BottomStart.args = {
    children: "Bottom start placement",
    dropdownItems: [
        { key: "lorem", content: "Lorem Ipsu Illit Dolcit" },
        {
            key: "shakespeare",
            content: "Shall I compare thee to a summer's day",
        },
    ],
    placement: "bottom-start",
};

export const BottomEnd = Template.bind({});
BottomEnd.args = {
    children: "Bottom end placement",
    dropdownItems: [
        { key: "lorem", content: "Lorem Ipsu Illit Dolcit" },
        {
            key: "shakespeare",
            content: "Shall I compare thee to a summer's day",
        },
    ],
    placement: "bottom-end",
};
