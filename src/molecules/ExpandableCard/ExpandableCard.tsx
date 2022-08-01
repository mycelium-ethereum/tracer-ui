// Generated with util/create-component.js
import React, { useEffect } from "react";
import { Icon } from "../../atoms";
import styled from "styled-components";

import { ExpandableCardProps } from "./ExpandableCard.types";

const ExpandableCard: React.FC<ExpandableCardProps> = ({
    headerContent,
    color,
    open = false,
    children,
    className,
}) => {
    const [isOpen, setIsOpen] = React.useState(open);
    const [contentHeight, setContentHeight] = React.useState(0);
    const contentRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen)
            setContentHeight(
                contentRef.current?.getBoundingClientRect().height,
            );
        else setContentHeight(0);
    }, [isOpen]);

    useEffect(() => {
        if (!contentHeight || !isOpen || !contentRef.current) return undefined;
        const resizeObserver = new ResizeObserver((el) => {
            // The extra 24px is to account for the padding on the card
            setContentHeight(el[0].contentRect.height + 24);
        });
        resizeObserver.observe(contentRef.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, [contentHeight, isOpen]);

    return (
        <Container color={color} open={isOpen} className={className}>
            <Header onClick={() => setIsOpen(!isOpen)}>
                <HeaderContent>{headerContent}</HeaderContent>
                <Chevron open={isOpen} />
            </Header>
            <Collapse height={contentHeight}>
                <Content ref={contentRef}>{children}</Content>
            </Collapse>
        </Container>
    );
};

export default ExpandableCard;

interface ContainerProps {
    open: boolean;
    color: ExpandableCardProps["color"];
}

const Container = styled.div<ContainerProps>`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid;
    border-radius: 16px;
    padding: 24px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
    ${(props) => {
        switch (props.color) {
            case "primary":
                return `
                    background-color: ${props.theme.colors.cell.primary};
                    border-color: ${props.theme.colors.cell.stroke};
                `;
            case "secondary":
                return `
                    background-color: ${props.theme.colors.cell.secondary};
                    border-color: ${props.theme.colors.cell.stroke};
                `;
            case "tertiary":
                return `
                    background: ${props.theme.colors.cell.gradient};
                    border-color: ${props.theme.colors.cell.stroke};
                `;
        }
    }}
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderContent = styled.span`
    font-size: 24px;
    font-weight: bold;
    font-family: ${(props) => props.theme.fontFamily.heading};
    color: ${(props) => props.theme.colors.text.primary};
`;

const Chevron = styled(Icon).attrs(() => ({
    name: "chevronDown",
}))<{ open: boolean }>`
    transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.2s ease-in-out;
`;

const Collapse = styled.div<{ height: number }>`
    height: ${(props) => props.height}px;
    transition: height 0.2s ease-in-out;
    overflow: hidden;
`;

const Content = styled.div`
    padding-top: 24px;
    color: ${(props) => props.theme.colors.text.primary};
`;
