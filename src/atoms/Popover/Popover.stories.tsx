// Generated with util/create-component.js
import React from "react";
import Popover from "./Popover";
import { Button } from "../";
import { PopoverProps } from "./Popover.types";
import { ComponentMeta, Story } from "@storybook/react";
import { Card } from "../Card";
import { placements } from "@popperjs/core";
import { Text } from "../Text";
import { useArgs } from "@storybook/addons";
import { Input } from "../Input";
import { Slider } from "../Slider";

export default {
    title: "atoms/Popover",
    component: Popover,
    argTypes: {
        content: {
            control: false,
            description: "A JSX element to be rendered inside the popover",
        },
        placement: {
            control: {
                type: "select",
                options: placements,
            },
            defaultValue: "bottom",
            description: "The placement of the popover.",
        },
        isOpen: {
            control: { type: "boolean" },
            defaultValue: false,
            description: "Whether the popover is open or not.",
        },
    },
} as ComponentMeta<typeof Popover>;

// Create a master template for mapping args to render the Popover component

const ExampleContent: React.FC = () => (
    <Card padding="sm" color="secondary">
        <Text.Subtitle variant="bold">Popover Content</Text.Subtitle>
        <Text.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text.Body>
    </Card>
);

const Template: Story<PopoverProps> = (args) => {
    const [{ isOpen }, updateArgs] = useArgs();
    return (
        <Popover content={<ExampleContent />} {...args} isOpen={isOpen}>
            <Button
                onClick={() => {
                    updateArgs({ isOpen: !isOpen });
                }}
            >
                Popover
            </Button>
        </Popover>
    );
};

export const Bottom = Template.bind({});
Bottom.args = {
    placement: "bottom",
    isOpen: true,
};
Bottom.parameters = {
    // The popover width is not consistent, so chromatic always detects a change
    chromatic: { disableSnapshot: true },
};

export const Top = Template.bind({});
Top.args = {
    placement: "top",
    isOpen: true,
};
Top.parameters = {
    // The popover width is not consistent, so chromatic always detects a change
    chromatic: { disableSnapshot: true },
};

export const NestedOverflowHidden: Story<PopoverProps> = (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    return (
        <div
            style={{
                width: "200px",
                height: "120px",
                overflow: "hidden",
                border: "1px dotted white",
            }}
        >
            <Popover content={<ExampleContent />} {...args}>
                <Button
                    size="small"
                    onClick={() => updateArgs({ isOpen: !isOpen })}
                >
                    Popover
                </Button>
            </Popover>
            <Text.Body>
                This div has overflow hidden but the popover will not be hidden
            </Text.Body>
        </div>
    );
};
NestedOverflowHidden.parameters = {
    // The popover width is not consistent, so chromatic always detects a change
    chromatic: { disableSnapshot: true },
};

export const Hoverable: Story<PopoverProps> = (args) => {
    const [{ isOpen }, updateArgs] = useArgs();
    return (
        <Popover content={<ExampleContent />} {...args} isOpen={isOpen}>
            <Button
                fluid
                onMouseEnter={() => {
                    updateArgs({ isOpen: true });
                }}
                onMouseLeave={() => {
                    updateArgs({ isOpen: false });
                }}
            >
                Hoverable
            </Button>
        </Popover>
    );
};
Hoverable.parameters = {
    // The popover width is not consistent, so chromatic always detects a change
    chromatic: { disableSnapshot: true },
};

export const OverText: Story<PopoverProps> = (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    return (
        <div style={{ width: "600px", textAlign: "center" }}>
            <Popover content={<ExampleContent />} {...args} isOpen={isOpen}>
                <Text.Subtitle
                    align="center"
                    onMouseEnter={() => updateArgs({ isOpen: true })}
                    onMouseLeave={() => updateArgs({ isOpen: false })}
                >
                    Hover over me
                </Text.Subtitle>
            </Popover>
            <Text.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar
                tempor. Cum sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien
                nunc eget.
            </Text.Body>
        </div>
    );
};
OverText.args = {
    placement: "bottom",
    isOpen: true,
};
OverText.parameters = {
    // The popover width is not consistent, so chromatic always detects a change
    chromatic: { disableSnapshot: true },
};

export const OverInput: Story<PopoverProps> = (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    return (
        <div style={{ width: "600px", textAlign: "center" }}>
            <Popover content={<ExampleContent />} {...args} isOpen={isOpen}>
                <Text.Subtitle
                    align="center"
                    onMouseEnter={() => updateArgs({ isOpen: true })}
                    onMouseLeave={() => updateArgs({ isOpen: false })}
                >
                    Hover over me
                </Text.Subtitle>
            </Popover>
            <Input placeholder="This should go under the popover" />
            <Slider value={45} />
        </div>
    );
};
OverInput.parameters = {
    // The popover width is not consistent, so chromatic always detects a change
    chromatic: { disableSnapshot: true },
};
