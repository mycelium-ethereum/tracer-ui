// Generated with util/create-component.js
import React from "react";
import { Icon } from "../../atoms";
import styled from "styled-components";

import { AlertProps } from "./Alert.types";

const Alert: React.FC<AlertProps> = ({ color, icon, children }) => (
    <Container color={color} data-testid="Alert">
        <Icon color={color} name={icon} />
        &nbsp; &nbsp;
        {children}
    </Container>
);

export default Alert;

type ContainerProps = {
    color: AlertProps["color"];
};

const Container = styled.span<ContainerProps>`
    display: inline-flex;
    align-items: center;
    color: ${(props) => {
        switch (props.color) {
            case "danger":
                return props.theme.colors.danger.text;
            case "success":
                return props.theme.colors.success.text;
            case "alert":
                return props.theme.colors.alert.text;
        }
    }};
    font-family: ${(props) => props.theme.fontFamily.body};
    font-size: 14px;
    font-weight: 700;
`;
