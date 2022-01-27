// Generated with util/create-component.js
import React from "react";
import Slider from "./Slider";
import { SliderProps } from "./Slider.types";
import { ComponentMeta, Story } from "@storybook/react";
import { useArgs } from "@storybook/addons";

export default {
    title: "atoms/Slider",
    component: Slider,
    argTypes: {
        value: {
            control: "range",
            defaultValue: 50,
        },
        min: {
            defaultValue: 0,
        },
        max: {
            defaultValue: 100,
        },
        step: {
            defaultValue: 1,
        },
        onChange: {
            action: "onChange",
        },
    },
} as ComponentMeta<typeof Slider>;

// Create a master template for mapping args to render the Slider component
const Template: Story<SliderProps> = ({ onChange, ...args }) => {
    const [{ value }, updateArgs] = useArgs();
    return (
        <Slider
            {...args}
            value={value}
            onChange={(ev) => {
                onChange(ev);
                updateArgs({ value: Number(ev.target.value) });
            }}
        ></Slider>
    );
};

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
