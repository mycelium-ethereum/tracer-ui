import React from "react";
import Button from "./Button";
import { ButtonProps } from './Button.types'
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    theme: { control: 'color' },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => (<Button {...args}>Test Button</Button>);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { theme: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { theme: "secondary" };
