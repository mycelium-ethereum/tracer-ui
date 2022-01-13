// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";
import { Text } from "..";

import { InfoRowProps } from "./InfoRow.types";

const InfoRow: React.FC<InfoRowProps> = ({
    imageSrc,
    title,
    subtitle,
    children,
}) => (
    <Row data-testid="InfoRow">
        {imageSrc ? <Image src={imageSrc} /> : null}
        <TextContainer>
            <Text.Body variant="bold">{title}</Text.Body>
            <Text.Footer>{subtitle}</Text.Footer>
        </TextContainer>
        <RightSlot>{children}</RightSlot>
    </Row>
);

export default InfoRow;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px;
`;

const Image = styled.img`
    height: 41px;
    width: 41px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 14px;
`;

const RightSlot = styled.div``;
