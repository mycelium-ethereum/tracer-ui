// Generated with util/create-component.js
import React from "react";
import ExpandableCard from "./ExpandableCard";
import { ExpandableCardProps } from "./ExpandableCard.types";
import { ComponentMeta, Story } from "@storybook/react";
import { Icon, Text } from "../../atoms";

export default {
    title: "molecules/ExpandableCard",
    component: ExpandableCard,
    argTypes: {
        headerContent: {
            defaultValue: "",
            control: { type: "text" },
        },
        color: {
            defaultValue: "primary",
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary"],
            },
        },
    },
} as ComponentMeta<typeof ExpandableCard>;

// Create a master template for mapping args to render the ExpandableCard component
const Template: Story<ExpandableCardProps> = (args) => (
    <div style={{ width: "600px" }}>
        <ExpandableCard {...args}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad illum
            similique ullam dolore sunt, nesciunt ipsam nobis ea accusantium
            modi quidem. Iure ipsum perferendis et aliquam sapiente excepturi
            animi sequi.
        </ExpandableCard>
    </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    headerContent: "Primary Expandable Card",
    color: "primary",
};

export const NestedExpandableCard: Story<ExpandableCardProps> = (args) => (
    <div style={{ width: "600px" }}>
        <ExpandableCard
            color="primary"
            headerContent={<span>Parent Card</span>}
        >
            <Text.Subtitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                illum
            </Text.Subtitle>
            <br />
            <br />
            <ExpandableCard {...args}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam eius quis natus ut alias libero cupiditate dignissimos
                perspiciatis? Necessitatibus voluptas soluta non, iste animi
                sapiente itaque eos nam ad perspiciatis.
            </ExpandableCard>
        </ExpandableCard>
    </div>
);
NestedExpandableCard.args = {
    headerContent: <span>Child Card</span>,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    headerContent: (
        <span>
            <Icon name="check-circle-solid" color="success" />
            &nbsp; Title with Icon
        </span>
    ),
    color: "primary",
};
