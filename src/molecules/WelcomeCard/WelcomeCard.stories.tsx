// Generated with util/create-component.js
import React from "react";
import WelcomeCard from "./WelcomeCard";
import { WelcomeCardProps } from "./WelcomeCard.types";
import { ComponentMeta, Story } from "@storybook/react";

const heroOptions: Record<string, WelcomeCardProps["heroItems"]> = {
    Basic: [
        {
            label: "The First Thing",
            imgSrc: "https://via.placeholder.com/150",
            imgAlt: "Alt1",
        },
        {
            label: "The Second Thing",
            imgSrc: "https://via.placeholder.com/150",
            imgAlt: "Alt2",
        },
    ],
    "Data Feeds": [
        {
            label: "Price Feed you want to use",
            imgSrc: "https://via.placeholder.com/150",
            imgAlt: "Alt1",
        },
        {
            label: "Collateral you want to use",
            imgSrc: "https://via.placeholder.com/150",
            imgAlt: "Alt2",
        },
    ],
    Pools: [
        {
            label: "Price Feed you want to use",
            imgSrc: "https://via.placeholder.com/150",
            imgAlt: "Alt1",
        },
        {
            label: "Collateral you want to use",
            imgSrc: "https://via.placeholder.com/150",
            imgAlt: "Alt2",
        },
    ],
};

export default {
    title: "molecules/WelcomeCard",
    component: WelcomeCard,
    argTypes: {
        title: { control: "text", defaultValue: "Welcome to the app" },
        subtitle: { control: "text", defaultValue: "This is a subtitle" },
        heroItems: {
            mapping: heroOptions,
            control: {
                type: "select",
                options: Object.keys(heroOptions),
            },
        },
        description: {
            control: "text",
            defaultValue:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum odio magna nullam risus imperdiet. Vel, dictum scelerisque congue velit quis lacus odio id. Ipsum aenean ornare ultricies purus elit eros, dapibus. A est sit mi dolor.",
        },
    },
} as ComponentMeta<typeof WelcomeCard>;

// Create a master template for mapping args to render the WelcomeCard component
const Template: Story<WelcomeCardProps> = (args) => (
    <div style={{ width: "90vw" }}>
        <WelcomeCard {...args}></WelcomeCard>
    </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    heroItems: heroOptions["Basic"],
};

export const DataFeeds = Template.bind({});
DataFeeds.args = {
    title: "Welcome to the Tracer Data Feeds Factory",
    subtitle: "To deploy new Data Feed, you’ll need the following",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum odio magna nullam risus imperdiet. Vel, dictum scelerisque congue velit quis lacus odio id. Ipsum aenean ornare ultricies purus elit eros, dapibus. A est sit mi dolor.",
    heroItems: heroOptions["Data Feeds"],
};

export const Pools = Template.bind({});
Pools.args = {
    title: "Welcome to the Tracer Pools Factory",
    subtitle: "To deploy new Pool, you’ll need the following",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum odio magna nullam risus imperdiet. Vel, dictum scelerisque congue velit quis lacus odio id. Ipsum aenean ornare ultricies purus elit eros, dapibus. A est sit mi dolor.",
    heroItems: heroOptions["Pools"],
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    title: "Welcome to the Tracer Pools Factory",
    subtitle: "To deploy new Pool, you’ll need the following",
    description: "The elements below are children of the WelcomeCard",
    heroItems: heroOptions["Pools"],
    children: (
        <div>
            <p>Here is some text that is inside the WelcomeCard.</p>
            <a href="#">Here is a link</a>
        </div>
    ),
};
