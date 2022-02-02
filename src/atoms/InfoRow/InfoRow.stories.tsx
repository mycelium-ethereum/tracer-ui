// Generated with util/create-component.js
import React from "react";
import InfoRow from "./InfoRow";
import { InfoRowProps } from "./InfoRow.types";
import { ComponentMeta, Story } from "@storybook/react";
import { testImages } from "../../storybookUtils/controlsData";
import { Button, Input } from "..";

const childrenOptions = {
    input: (
        <div style={{ width: "100px" }}>
            <Input value={"14.5"} rightSlot="%" readOnly />
        </div>
    ),
    button: (
        <Button variant="action" size="small">
            Add to Portfolio
        </Button>
    ),
};

export default {
    title: "atoms/InfoRow",
    component: InfoRow,
    argTypes: {
        title: {
            control: {
                type: "text",
            },
            defaultValue: "Title",
        },
        subtitle: {
            control: {
                type: "text",
            },
            defaultValue: "Subtitle",
        },
        imageSrc: {
            options: Object.keys(testImages.assets),
            mapping: testImages.assets,
            control: {
                type: "select",
            },
        },
        children: {
            options: Object.keys(childrenOptions),
            mapping: childrenOptions,
            control: {
                type: "select",
            },
        },
    },
} as ComponentMeta<typeof InfoRow>;

// Create a master template for mapping args to render the InfoRow component
const Template: Story<InfoRowProps> = (args) => (
    <div style={{ width: "600px" }}>
        <InfoRow {...args}></InfoRow>
    </div>
);

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
    title: "Title",
    subtitle: "Subtitle",
};

export const WithInput = Template.bind({});
WithInput.args = {
    title: "Ethereum",
    subtitle: "ETH",
    imageSrc: "ethereum",
    children: "input",
};

export const WithButton = Template.bind({});
WithButton.args = {
    title: "Bitcoin",
    subtitle: "BTC",
    imageSrc: "bitcoin",
    children: "button",
};
