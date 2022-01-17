// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";
import { Card, Text, Button } from "../../atoms";

const { Title, Subtitle, Body } = Text;

import { WelcomeCardProps } from "./WelcomeCard.types";

const WelcomeCard: React.FC<WelcomeCardProps> = ({
    title,
    subtitle,
    heroItems,
    footerText,
    buttonText,
    onButtonClick,
    buttonHref,
}) => (
    <Card data-testid="WelcomeCard" maxWidth="878px" padding="lg">
        <Title variant="bold" align="center" margin="0 0 40px 0">
            {title}
        </Title>
        <Subtitle align="center" margin="16px 0">
            {subtitle}
        </Subtitle>
        <HeroContainer>
            {heroItems.map((item, index) => (
                <div key={`hero_card_${index}`}>
                    <Card color="secondary" shadow="md">
                        <CardImage src={item.imgSrc} alt={item.imgAlt} />
                        <Body color="secondary" align="center">
                            {item.label}
                        </Body>
                    </Card>
                </div>
            ))}
        </HeroContainer>
        <Body color="secondary" margin="24px 0">
            {footerText}
        </Body>
        <ButtonContainer>
            <Button variant="action" onClick={onButtonClick} href={buttonHref}>
                {buttonText}
            </Button>
        </ButtonContainer>
    </Card>
);

export default WelcomeCard;

const HeroContainer = styled.div`
    display: flex;
    margin: 0 -1rem;
    justify-content: space-around;

    & > div {
        flex: 1;
    }
`;

const CardImage = styled.img`
    display: block;
    max-height: 67px;
    width: auto;
    height: auto;
    margin: 0 auto;
    margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
    margin: 0 auto;
    max-width: 308px;
`;
