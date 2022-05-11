// Generated with util/create-component.js
import React from "react";
import Footer from "./Footer";
import { FooterProps } from "./Footer.types";
import { ComponentMeta, Story } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: "organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {

  },
} as ComponentMeta<typeof Footer>;

// Create a master template for mapping args to render the Footer component
const Template: Story<FooterProps> = (args) => <Footer {...args}></Footer>;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
}