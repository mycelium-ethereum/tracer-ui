// Generated with util/create-component.js
import React from "react";
import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";
import { ComponentMeta, Story } from "@storybook/react";
import { NavDropdownButton } from "../../molecules";

export default {
    title: "organisms/Navbar",
    component: Navbar,
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        links: {
            defaultValue: [],
            control: {
                type: "array",
            },
        },
        activeLink: {
            defaultValue: "",
            control: {
                type: "text",
            },
        },
        href: {
            defaultValue: "",
            control: { type: "text" },
        },
    },
} as ComponentMeta<typeof Navbar>;

// Create a master template for mapping args to render the Navbar component
const Template: Story<NavbarProps<string>> = (args) => (
    <Navbar {...args}></Navbar>
);

export const Default = Template.bind({});
Default.args = {};

export const WithLinks = Template.bind({});
WithLinks.args = {
    links: ["Link 1", "Link 2", "Link 3"],
    activeLink: "Link 1",
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    links: ["Buy", "Sell", "Stake"],
    activeLink: "Sell",
    children: (
        <NavDropdownButton
            placement="bottom-end"
            dropdownItems={[
                {
                    key: "arbitrum",
                    content: "Arbitrum",
                },
                {
                    key: "arb-rinkeby",
                    content: "Arbitrum Rinkeby",
                },
            ]}
            onItemClick={console.log}
        >
            Connect Wallet
        </NavDropdownButton>
    ),
};
