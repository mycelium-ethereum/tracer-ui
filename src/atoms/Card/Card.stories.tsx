// Generated with util/create-component.js
import React from "react";
import Card from "./Card";
import { CardProps } from "./Card.types";
import { ComponentMeta, Story } from "@storybook/react";

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
        shadow: {
            control: { type: "boolean" },
            defaultValue: false,
            description: "If true, the card will have a shadow.",
        },
        padding: {
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
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
                options: ["active", "highlight"],
            },
            defaultValue: "active",
            description: "The color of the card.",
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
        <h1>Card Title</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga
            provident distinctio temporibus maxime vitae cupiditate inventore
            repellat numquam, incidunt esse quam pariatur saepe iusto minima
            architecto, at sint earum.
        </p>
    </Card>
);

export const Default = Template.bind({});

export const Highlight = Template.bind({});
Highlight.args = {
    color: "highlight",
};

export const Shadow = Template.bind({});
Shadow.args = {
    shadow: true,
};

export const HalfWidth = Template.bind({});
HalfWidth.args = {
    maxWidth: "500px",
};

export const FluidAndSquare = Template.bind({});
FluidAndSquare.args = {
    fluid: true,
    square: true,
};

export const SmallPadding = Template.bind({});
SmallPadding.args = {
    padding: "sm",
};

export const NestedCard: Story<CardProps> = (args) => (
    <Card>
        <h1>Card Title</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
            tempore. Adipisci amet ipsa at reiciendis distinctio quam eius
            delectus soluta architecto esse est quibusdam, quaerat officiis
            fugiat neque impedit! Vero!
        </p>

        <Card {...args}>
            <h2>Card Subtitle</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quis.
            </p>
        </Card>
    </Card>
);
NestedCard.args = {
    color: "highlight",
    padding: "sm",
    fluid: true,
};
