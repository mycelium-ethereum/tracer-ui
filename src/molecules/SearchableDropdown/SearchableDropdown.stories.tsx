// Generated with util/create-component.js
import React from "react";
import SearchableDropdown from "./SearchableDropdown";
import { SearchableDropdownProps } from "./SearchableDropdown.types";
import { ComponentMeta, Story } from "@storybook/react";
import { Button } from "../../atoms";
import { useArgs } from "@storybook/addons";

export default {
    title: "molecules/SearchableDropdown",
    component: SearchableDropdown,
    argTypes: {
        placeholder: {
            control: {
                type: "text",
            },
            defaultValue: "Search",
        },
        options: {
            control: false,
        },
        isDropdownOpen: {
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
        emptyText: {
            control: {
                type: "text",
            },
            defaultValue: "No results found",
        },
    },
} as ComponentMeta<typeof SearchableDropdown>;

const Template: Story<SearchableDropdownProps> = (args) => {
    const [{ isDropdownOpen }, updateArgs] = useArgs();
    return (
        <div style={{ width: "600px" }}>
            <SearchableDropdown
                {...args}
                isDropdownOpen={isDropdownOpen}
                onFocus={() => updateArgs({ isDropdownOpen: true })}
                onFocusOut={() => updateArgs({ isDropdownOpen: false })}
            />
        </div>
    );
};

export const Simple = Template.bind({});
Simple.args = {
    options: [
        {
            value: "ethereum",
            searchTerms: ["ethereum"],
            title: "Ethereum",
            subtitle: "ETH",
        },
        {
            value: "bitcoin",
            searchTerms: ["bitcoin", "btc"],
            title: "Bitcoin",
            subtitle: "BTC",
        },
        {
            value: "litecoin",
            searchTerms: ["litecoin", "ltc"],
            title: "Litecoin",
            subtitle: "LTC",
        },
        {
            value: "ripple",
            searchTerms: ["ripple", "xrp"],
            title: "Ripple",
            subtitle: "XRP",
        },
    ],
};

export const ImagesAndButtons = Template.bind({});
ImagesAndButtons.args = {
    options: [
        {
            value: "ethereum",
            searchTerms: ["ethereum"],
            title: "Ethereum",
            subtitle: "ETH",
            imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
            rightContent: (
                <Button variant="action" size="small">
                    + Add Market
                </Button>
            ),
        },
        {
            value: "bitcoin",
            searchTerms: ["bitcoin", "btc"],
            title: "Bitcoin",
            subtitle: "BTC",
            imageSrc: "https://bitcoin.org/img/icons/opengraph.png?1641218872",
            rightContent: (
                <Button variant="action" size="small">
                    + Add Market
                </Button>
            ),
        },
        {
            value: "litecoin",
            searchTerms: ["litecoin", "ltc"],
            title: "Litecoin",
            subtitle: "LTC",
            imageSrc:
                "https://www.vhv.rs/dpng/d/101-1013026_litecoin-logo-png-transparent-png.png",
            rightContent: (
                <Button variant="action" size="small">
                    + Add Market
                </Button>
            ),
        },
        {
            value: "ripple",
            searchTerms: ["ripple", "xrp"],
            title: "Ripple",
            subtitle: "XRP",
            imageSrc:
                "https://seeklogo.com/images/R/ripple-xrp-logo-E97D62205B-seeklogo.com.png",
            rightContent: (
                <Button variant="action" size="small">
                    + Add Market
                </Button>
            ),
        },
    ],
};
