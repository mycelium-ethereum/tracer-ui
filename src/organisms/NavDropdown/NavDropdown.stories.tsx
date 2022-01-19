// Generated with util/create-component.js
  import React from "react";
  import NavDropdown from "./NavDropdown";
  import { NavDropdownProps } from "./NavDropdown.types";
  import { ComponentMeta, Story } from "@storybook/react";
  
  export default {
    title: "organisms/NavDropdown",
    component: NavDropdown,
    argTypes: {
  
    },
  } as ComponentMeta<typeof NavDropdown>;
  
  // Create a master template for mapping args to render the NavDropdown component
  const Template: Story<NavDropdownProps> = (args) => <NavDropdown {...args}></NavDropdown>;
  
  // Reuse that template for creating different stories
  export const Primary = Template.bind({});
  Primary.args = {
  };
