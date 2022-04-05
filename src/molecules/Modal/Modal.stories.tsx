// Generated with util/create-component.js
import React from "react";
import Modal from "./Modal";
import { ModalProps } from "./Modal.types";
import { ComponentMeta, Story } from "@storybook/react";

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
    },
    color: {
        control: {
            type: "select",
            options: ["primary", "secondary", "tertiary"],
        },
    },
} as ComponentMeta<typeof Modal>;

// Create a master template for mapping args to render the Modal component
const Template: Story<ModalProps> = (args) => (
    <Modal {...args}>
        <h1>Modal Title</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos doloremque explicabo quod quo ratione vel, quidem
            doloribus aut nam? Nisi praesentium minus incidunt quam quasi ex
            recusandae alias numquam veritatis.
        </p>
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
