// Generated with util/create-component.js
import React from "react";
import Select from "./Select";
import { SelectOption, SelectProps } from "./Select.types";
import { ComponentMeta, Story } from "@storybook/react";
import { useArgs } from "@storybook/addons";
import { testImages } from "../../storybookUtils/controlsData";
import { Text } from "../../atoms";

const { Footer } = Text;

const optionOptions: Record<string, SelectOption[]> = {
    collateral: [
        {
            title: "Ethereum",
            value: "ethereum",
            imageSrc: testImages.assets.ethereum,
            rightContent: <Footer color="secondary">ETH</Footer>,
        },
        {
            title: "Bitcoin",
            value: "bitcoin",
            imageSrc: testImages.assets.bitcoin,
            rightContent: <Footer color="secondary">BTC</Footer>,
        },
        {
            title: "Litecoin",
            value: "litecoin",
            imageSrc: testImages.assets.litecoin,
            rightContent: <Footer color="secondary">LTC</Footer>,
        },
        {
            title: "Ripple",
            value: "ripple",
            imageSrc: testImages.assets.ripple,
            rightContent: <Footer color="secondary">XRP</Footer>,
        },
    ],
    priceFeed: [
        {
            title: "AAVE/USDC",
            value: "aave-usdc",
            rightContent: (
                <Footer color="footnote">
                    0x3a9a0c0f9b8c5e0c7c0f9b8c5e0c7c0f9b8c5e0c
                </Footer>
            ),
        },
        {
            title: "BTC/ETH",
            value: "btc-eth",
            rightContent: (
                <Footer color="footnote">
                    0x3a9a0c0f9b8c5e0c7c0f9b8c5e0c7c0f9b8c5e0c
                </Footer>
            ),
        },
        {
            title: "CNY/USD",
            value: "cny-usd",
            rightContent: (
                <Footer color="footnote">
                    0x3a9a0c0f9b8c5e0c7c0f9b8c5e0c7c0f9b8c5e0c
                </Footer>
            ),
        },
        {
            title: "UNI/USDC",
            value: "uni-usdc",
            rightContent: (
                <Footer color="footnote">
                    0x3a9a0c0f9b8c5e0c7c0f9b8c5e0c7c0f9b8c5e0c
                </Footer>
            ),
        },
    ],
    longList: generateLongList(100),
};

function generateLongList(length: number): SelectOption[] {
    const options = [];
    for (let i = 0; i < length; i++) {
        options.push({
            title: `Option ${i}`,
            value: `option-${i}`,
        });
    }
    return options;
}

export default {
    title: "molecules/Select",
    component: Select,
    argTypes: {
        value: {
            control: false,
            defaultValue: "",
            description: "The value of the select",
        },
        placeholder: {
            control: "text",
            defaultValue: "Select an option",
            description: "The placeholder text",
        },
        options: {
            mapping: optionOptions,
            control: {
                type: "select",
                options: Object.keys(optionOptions),
            },
            defaultValue: "collateral",
            description: "The options to display",
        },
        onChange: {
            control: false,
            description: "The function to call when the select changes",
        },
    },
} as ComponentMeta<typeof Select>;

// Create a master template for mapping args to render the Select component
const Template: Story<SelectProps> = ({ onChange, ...args }) => {
    const [{ value }, updateArgs] = useArgs();
    return (
        <div style={{ width: "500px" }}>
            <Select
                {...args}
                value={value}
                onChange={(newVal) => {
                    updateArgs({ value: newVal });
                    onChange(newVal);
                }}
            ></Select>
        </div>
    );
};

// Reuse that template for creating different stories
export const PriceFeeds = Template.bind({});
PriceFeeds.args = {
    placeholder: "Select a price feed",
    options: "priceFeed",
};

export const Collateral = Template.bind({});
Collateral.args = {
    placeholder: "Select a collateral",
    options: "collateral",
};

export const LongList = Template.bind({});
LongList.args = {
    options: "longList",
};
