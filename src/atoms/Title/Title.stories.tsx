// Generated with util/create-component.js
  import React from "react";
  import Title from "./Title";
  import { TitleProps } from "./Title.types";
  import { ComponentMeta, Story } from "@storybook/react";
  
  export default {
    title: "atoms/Title",
    component: Title,
    argTypes: {
  
    },
  } as ComponentMeta<typeof Title>;
  
  // Create a master template for mapping args to render the Title component
  const Template: Story<TitleProps> = (args) => <Title {...args}></Title>;
  
  // Reuse that template for creating different stories
  export const Primary = Template.bind({});
  Primary.args = {
    foo: "bar"
  };
