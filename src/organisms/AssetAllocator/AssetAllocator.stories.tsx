// Generated with util/create-component.js
import React from "react";
import AssetAllocator from "./AssetAllocator";
import { AssetAllocatorProps, Asset } from "./AssetAllocator.types";
import { ComponentMeta, Story } from "@storybook/react";
import { testImages } from "../../storybookUtils/controlsData";
import { useArgs } from "@storybook/addons";

export default {
    title: "organisms/AssetAllocator",
    component: AssetAllocator,
    argTypes: {
        assets: {
            control: false,
        },
        allocations: {
            control: false,
            defaultValue: [],
        },
        addButtonText: {
            control: {
                type: "text",
            },
            defaultValue: "Add Market",
        },
        removeButtonText: {
            control: {
                type: "text",
            },
            defaultValue: "Remove",
        },
        emptyText: {
            control: {
                type: "text",
            },
            defaultValue: "Click to add Markets",
        },
        searchText: {
            control: {
                type: "text",
            },
            defaultValue: "Search Markets",
        },
        emptySearchText: {
            control: {
                type: "text",
            },
            defaultValue: "No results found",
        },
        addMarketDisabled: {
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof AssetAllocator>;

const testAssets: Asset[] = [
    {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        imageSrc: testImages.assets.ethereum,
    },
    {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        imageSrc: testImages.assets.bitcoin,
    },
    {
        id: "litecoin",
        name: "Litecoin",
        symbol: "LTC",
        imageSrc: testImages.assets.litecoin,
    },
    {
        id: "ripple",
        name: "Ripple",
        symbol: "XRP",
        imageSrc: testImages.assets.ripple,
    },
];

// Create a master template for mapping args to render the AssetAllocator component
const Template: Story<AssetAllocatorProps> = ({
    onAllocationsChange,
    ...args
}) => {
    const [{ allocations }, updateArgs] = useArgs();
    return (
        <AssetAllocator
            {...args}
            assets={testAssets}
            allocations={allocations}
            onAllocationsChange={(newAllocations) => {
                updateArgs({ allocations: newAllocations });
                onAllocationsChange && onAllocationsChange(newAllocations);
            }}
        ></AssetAllocator>
    );
};

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
