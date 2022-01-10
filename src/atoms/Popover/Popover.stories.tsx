// Generated with util/create-component.js
import React from "react";
import Popover from "./Popover";
import { Button } from "../";
import { PopoverProps } from "./Popover.types";
import { ComponentMeta, Story } from "@storybook/react";
import { Card } from "../Card";
import { placements } from "@popperjs/core";

export default {
    title: "atoms/Popover",
    component: Popover,
    argTypes: {
        content: {
            control: false,
            description: "A JSX element to be rendered inside the popover",
        },
        trigger: {
            control: { type: "select", options: ["click", "hover"] },
            defaultValue: "click",
            description: "The event type to trigger the popover.",
        },
        placement: {
            control: {
                type: "select",
                options: placements,
            },
            defaultValue: "bottom",
            description: "The placement of the popover.",
        },
    },
} as ComponentMeta<typeof Popover>;

// Create a master template for mapping args to render the Popover component

const ExampleContent: React.FC = () => (
    <Card padding="xs" shadow fluid>
        <h3>Popover Content</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Card>
);

const Template: Story<PopoverProps> = (args) => (
    <Popover content={<ExampleContent />} {...args}>
        <Button>Popover</Button>
    </Popover>
);

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {};

export const Hover = Template.bind({});
Hover.args = {
    trigger: "hover",
};

export const Top = Template.bind({});
Top.args = {
    placement: "top",
};

export const OverText: Story<PopoverProps> = (args) => (
    <Popover content={<ExampleContent />} {...args}>
        <h2>Lorem ipsu</h2>
    </Popover>
);
OverText.args = {
    trigger: "hover",
};

export const NestedOverflowHidden: Story<PopoverProps> = (args) => (
    <div
        style={{
            width: "100px",
            height: "100px",
            overflow: "hidden",
            border: "1px dotted black",
        }}
    >
        <Popover content={<ExampleContent />} {...args}>
            <Button size="small">Popover</Button>
        </Popover>
    </div>
);
