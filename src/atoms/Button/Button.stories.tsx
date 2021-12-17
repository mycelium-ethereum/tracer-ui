import React from "react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      option: ["primary", "secondary", "error"],
      defaultValue: "primary",
    },
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    children: {
      control: { type: "text" },
      defaultValue: "Button Text",
    },
    as: { table: { disable: true } },
    theme: { table: { disable: true } },
    ref: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
  },
} as ComponentMeta<typeof Button>;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
};
