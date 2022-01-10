// Generated with util/create-component.js
  import React from "react";
  import AllocationSlider from "./AllocationSlider";
  import { AllocationSliderProps } from "./AllocationSlider.types";
  import { ComponentMeta, Story } from "@storybook/react";
  
  export default {
    title: "molecules/AllocationSlider",
    component: AllocationSlider,
    argTypes: {
  
    },
  } as ComponentMeta<typeof AllocationSlider>;
  
  // Create a master template for mapping args to render the AllocationSlider component
  const Template: Story<AllocationSliderProps> = (args) => <AllocationSlider {...args}></AllocationSlider>;
  
  // Reuse that template for creating different stories
  export const Primary = Template.bind({});
  Primary.args = {
    foo: "bar"
  };
