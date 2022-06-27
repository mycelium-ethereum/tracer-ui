// Generated with util/create-component.js
import React from "react";
import Modal from "./Modal";
import { ModalProps } from "./Modal.types";
import { ComponentMeta, Story } from "@storybook/react";
import { Text } from "../../atoms";

export default {
    title: "molecules/Modal",
    component: Modal,
    argTypes: {
        open: {
            defaultValue: false,
            control: {
                type: "boolean",
            },
        },
        color: {
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        maxWidth: {
            control: {
                type: "text",
            },
        },
    },
} as ComponentMeta<typeof Modal>;

// Create a master template for mapping args to render the Modal component
const Template: Story<ModalProps> = (args) => (
    <Modal {...args}>
        <Text.Subtitle>Modal Title</Text.Subtitle>
        <Text.Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos doloremque explicabo quod quo ratione vel, quidem
            doloribus aut nam? Nisi praesentium minus incidunt quam quasi ex
            recusandae alias numquam veritatis.
        </Text.Body>
    </Modal>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    open: true,
    color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    open: true,
    color: "secondary",
};

export const Small = Template.bind({});
Small.args = {
    open: true,
    color: "primary",
    maxWidth: "400px",
};
