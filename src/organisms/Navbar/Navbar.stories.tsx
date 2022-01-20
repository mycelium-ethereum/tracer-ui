// Generated with util/create-component.js
import React from "react";
import Nav from "./index";
import { NavbarProps, NavLinksProps } from "./Navbar.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "organisms/Navbar",
    component: Nav.Navbar,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
      linksPosition: {
          defaultValue: "left",
          control: {
              type: "select",
              options: ["left", "center", "right"],
          },
      },
      links: {
          defaultValue: [],
          control: {
              type: "array",
          },
      },
      selectedLink: {
          defaultValue: 0,
          control: {
              type: "number",
          },
      },
    },
} as ComponentMeta<typeof Nav.Navbar>;

// Create a master template for mapping args to render the Navbar component
const Template: Story<NavbarProps & { selectedLink: number, links: string[], linksPosition: NavLinksProps['position'] }> = (args) => (
    <Nav.Navbar {...args} >
        <Nav.HeaderSiteSwitcher />
        <Nav.NavLinks selectedItem={args.selectedLink} position={args.linksPosition}> 
            {args.links.map((link: string) => (<a key={link}>{link}</a>))}
        </Nav.NavLinks>
    </Nav.Navbar>
)

export const WithDropdown = Template.bind({});
WithDropdown.args = {
    children: (
        <>
            <Nav.HeaderSiteSwitcher />
        </>
    )
};

export const WithLinks = Template.bind({
});
WithLinks.args = {
    links: ['Link 1', 'Link 2', 'Link 3'],
    selectedLink: 0,
    children: (
        <>
            <Nav.HeaderSiteSwitcher />
        </>
    )
};
