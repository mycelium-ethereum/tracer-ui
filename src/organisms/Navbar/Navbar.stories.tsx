// Generated with util/create-component.js
  import React from "react";
  import Navbar from "./Navbar";
  import { NavbarProps } from "./Navbar.types";
  import { ComponentMeta, Story } from "@storybook/react";
  
  export default {
    title: "organisms/Navbar",
    component: Navbar,
    argTypes: {
  
    },
  } as ComponentMeta<typeof Navbar>;
  
  // Create a master template for mapping args to render the Navbar component
  const Template: Story<NavbarProps> = (args) => <Navbar {...args}></Navbar>;
  
  // Reuse that template for creating different stories
  export const Primary = Template.bind({});
  Primary.args = {
    foo: "bar"
  };
