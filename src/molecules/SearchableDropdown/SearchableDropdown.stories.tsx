// Generated with util/create-component.js
import React from "react";
import SearchableDropdown from "./SearchableDropdown";
import { SearchableDropdownProps } from "./SearchableDropdown.types";
import { ComponentMeta, Story } from "@storybook/react";
import { Button } from "../../atoms";

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
    },
} as ComponentMeta<typeof SearchableDropdown>;

export const MarketList: Story<SearchableDropdownProps> = (args) => (
    <div style={{ width: "600px" }}>
        <SearchableDropdown
            {...args}
            options={[
                {
                    value: "ethereum",
                    searchTerms: ["ethereum"],
                    title: "Ethereum",
                    subtitle: "ETH",
                    imageSrc:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
                    rightContent: (
                        <Button variant="primary" size="small">
                            + Add Market
                        </Button>
                    ),
                },
                {
                    value: "bitcoin",
                    searchTerms: ["bitcoin", "btc"],
                    title: "Bitcoin",
                    subtitle: "BTC",
                    imageSrc:
                        "https://bitcoin.org/img/icons/opengraph.png?1641218872",
                    rightContent: (
                        <Button variant="primary" size="small">
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
                        <Button variant="primary" size="small">
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
                        <Button variant="primary" size="small">
                            + Add Market
                        </Button>
                    ),
                },
            ]}
        ></SearchableDropdown>
    </div>
);
