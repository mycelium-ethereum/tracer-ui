// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";
import { Text, Icon } from "../../atoms";

import { CheckboxProps } from "./Checkbox.types";

const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    label,
    onChange,
    disabled,
}) => (
    <Container
        data-test-id="checkbox"
        onClick={() => (disabled ? null : onChange(!checked))}
        disabled={disabled}
    >
        <Icon name={checked ? "check-circle" : "circle"} />
        <Text.Body color="secondary" margin="0 16px">
            {label}
        </Text.Body>
    </Container>
);

export default Checkbox;

type ContainerProps = {
    disabled?: boolean;
};

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    transition: opacity 0.1s ease-in-out;
    &: active {
        opacity: ${(props) => (props.disabled ? 0.5 : 0.5)};
    }
    user-select: none;
`;
