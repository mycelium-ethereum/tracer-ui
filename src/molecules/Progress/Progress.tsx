// Generated with util/create-component.js
import React from "react";
import { Icon } from "../../atoms";
import styled from "styled-components";

import { ProgressProps } from "./Progress.types";

const Progress: React.FC<ProgressProps> = ({
    steps,
    currentStep,
    onClickStep,
}) => (
    <Container data-testid="Progress">
        {steps.map((text, index) => {
            if (currentStep > index) {
                return (
                    <DoneStep
                        leftBorder={index !== 0}
                        onClick={() => onClickStep(index)}
                    >
                        <Icon name="check-circle" color="success" size="lg" />
                        &nbsp;&nbsp;{text}
                    </DoneStep>
                );
            } else if (currentStep === index) {
                return (
                    <CurrentStep onClick={() => onClickStep(index)}>
                        {index > 0 ? <Triangle /> : null}
                        <NumberCircle>{index + 1}</NumberCircle>
                        &nbsp;&nbsp;{text}
                    </CurrentStep>
                );
            } else {
                return (
                    <TodoStep onClick={() => onClickStep(index)}>
                        <NumberCircle>{index + 1}</NumberCircle>
                        &nbsp;&nbsp;{text}
                    </TodoStep>
                );
            }
        })}
    </Container>
);

export default Progress;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    border-radius: 16px;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.06))
        drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
    overflow: hidden;
    font-family: "Inter", sans-serif;
`;

const Step = styled.div`
    position: relative;
    flex: 1;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.primary};
`;

interface DoneStepProps {
    leftBorder?: boolean;
}

const DoneStep = styled(Step)<DoneStepProps>`
    background-color: ${({ theme }) => theme.colors.cell.tertiary};
    border-left: ${({ leftBorder, theme }) =>
        leftBorder ? `1px solid ${theme.colors.cell.primary}` : "none"};
`;

const CurrentStep = styled(Step)`
    background-color: ${({ theme }) => theme.colors.cell.secondary};
    font-weight: 700;
`;

const TodoStep = styled(Step)`
    background-color: ${({ theme }) => theme.colors.cell.secondary};
    border-left: 1px solid ${({ theme }) => theme.colors.cell.tertiary};
    color: ${({ theme }) => theme.colors.text.tertiary};
`;

const NumberCircle = styled.div`
    padding: 0;
    margin: 0;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    border: 1px solid;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Triangle = styled.div`
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
    border-left: 16px solid ${({ theme }) => theme.colors.cell.tertiary};
`;
