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
            control: { type: "select", options: ["none", "strong", "light"] },
            defaultValue: "none",
            description: "The type of border for the card.",
        },
        color: {
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary"],
            },
            defaultValue: "primary",
            description: "The color of the card.",
        },
    },
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (Story) => (
            <div style={{ padding: "3rem" }}>
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
    border: "strong",
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
    border: "strong",
};

export const Square = Template.bind({});
Square.args = {
    square: true,
    border: "strong",
};

export const NoPadding = Template.bind({});
NoPadding.args = {
    padding: "none",
    border: "strong",
};

export const NestedCard: Story<CardProps> = (args) => (
    <Card border="strong">
        <Text.Title>Card Title</Text.Title>
        <Text.Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
            tempore. Adipisci amet ipsa at reiciendis distinctio quam eius
            delectus soluta architecto esse est quibusdam, quaerat officiis
            fugiat neque impedit! Vero!
        </Text.Body>
        <br />

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
};
