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

export const Default: Story<CardProps> = (args) => (
  <Card {...args}>
    <h1>Card Title</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga
      provident distinctio temporibus maxime vitae cupiditate inventore repellat
      numquam, incidunt esse quam pariatur saepe iusto minima architecto, at
      sint earum.
    </p>
  </Card>
);

export const MaxWidth: Story<CardProps> = (args) => (
  <Card {...args}>
    <h1>Card Title</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga
      provident distinctio temporibus maxime vitae cupiditate inventore repellat
      numquam, incidunt esse quam pariatur saepe iusto minima architecto, at
      sint earum.
    </p>
  </Card>
);
MaxWidth.args = {
  maxWidth: "500px",
};
