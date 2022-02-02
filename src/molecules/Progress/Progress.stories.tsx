// Generated with util/create-component.js
import React from "react";
import Progress from "./Progress";
import { ProgressProps } from "./Progress.types";
import { ComponentMeta, Story } from "@storybook/react";
import { useArgs } from "@storybook/addons";

export default {
    title: "molecules/Progress",
    component: Progress,
    argTypes: {
        steps: {
            control: false,
        },
        currentStep: {
            control: {
                type: "number",
            },
        },
    },
} as ComponentMeta<typeof Progress>;

// Create a master template for mapping args to render the Progress component
const Template: Story<ProgressProps> = ({ onClickStep, ...args }) => {
    const [{ currentStep }, updateArgs] = useArgs();
    return (
        <div style={{ width: "600px" }}>
            <Progress
                {...args}
                currentStep={currentStep}
                onClickStep={(idx) => {
                    onClickStep(idx);
                    updateArgs({ currentStep: idx });
                }}
            ></Progress>
        </div>
    );
};

// Reuse that template for creating different stories
export const ThreeSteps = Template.bind({});
ThreeSteps.args = {
    steps: ["Step 0", "Step 1", "Step 2"],
};

export const FourSteps = Template.bind({});
FourSteps.args = {
    steps: ["Step 0", "Step 1", "Step 2", "Step 3"],
};

export const Realistic = Template.bind({});
Realistic.args = {
    steps: ["Details", "Parameters", "Deploy"],
};
