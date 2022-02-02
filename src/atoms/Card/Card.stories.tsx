// Generated with util/create-component.js
import React from "react";
import Card from "./Card";
import { CardProps } from "./Card.types";
import { ComponentMeta, Story } from "@storybook/react";
import { Text } from "../";

export default {
    title: "atoms/Card",
    component: Card,
    argTypes: {
        maxWidth: {
            name: "maxWidth (px, rem, %)",
            control: { type: "text" },
            description: "The max-width of the card",
            defaultValue: "",
        },
        fluid: {
            control: { type: "boolean" },
            defaultValue: false,
            description:
                "If true, the card will take up 100% of its container. If false, the card will take up 100% of the container minus 2rem.",
        },
        square: {
            control: { type: "boolean" },
            defaultValue: false,
            description: "If true, the card will have a square border.",
        },
        padding: {
            control: {
                type: "select",
                options: ["none", "sm", "md", "lg"],
            },
            defaultValue: "md",
            description: "The padding of the card.",
        },
        border: {
            control: { type: "boolean" },
            defaultValue: false,
            description: "If true, the card will have a border.",
        },
        color: {
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary"],
            },
            defaultValue: "primary",
            description: "The color of the card.",
        },
        shadow: {
            control: {
                type: "select",
                options: ["sm", "md", "lg", "none"],
            },
            defaultValue: "sm",
        },
    },
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (Story) => (
            <div style={{ paddingTop: "3rem" }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Card>;

const Template: Story<CardProps> = (args) => (
    <Card {...args}>
        <Text.Title>Card Title</Text.Title>
        <Text.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga
            provident distinctio temporibus maxime vitae cupiditate inventore
            repellat numquam, incidunt esse quam pariatur saepe iusto minima
            architecto, at sint earum.
        </Text.Body>
    </Card>
);

export const Primary = Template.bind({});
Primary.args = {
    color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    color: "tertiary",
};

export const HalfWidth = Template.bind({});
HalfWidth.args = {
    maxWidth: "50%",
};

export const FluidAndSquare = Template.bind({});
FluidAndSquare.args = {
    fluid: true,
    square: true,
};

export const NoPadding = Template.bind({});
NoPadding.args = {
    padding: "none",
    shadow: true,
};

export const NestedCard: Story<CardProps> = (args) => (
    <Card>
        <Text.Title>Card Title</Text.Title>
        <Text.Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
            tempore. Adipisci amet ipsa at reiciendis distinctio quam eius
            delectus soluta architecto esse est quibusdam, quaerat officiis
            fugiat neque impedit! Vero!
        </Text.Body>

        <Card {...args}>
            <Text.Subtitle>Card Subtitle</Text.Subtitle>
            <Text.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quis.
            </Text.Body>
        </Card>
    </Card>
);
NestedCard.args = {
    color: "tertiary",
    padding: "sm",
    fluid: true,
};
