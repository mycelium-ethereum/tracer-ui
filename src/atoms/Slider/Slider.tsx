// Generated with util/create-component.js
import React from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

import { SliderProps } from "./Slider.types";

const Slider: React.FC<SliderProps> = ({
    value,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    onChangeNumber,
    ...rest
}) => (
    <StyledSlider
        {...(rest as StyledComponent<"input", DefaultTheme, {}, never>)}
        data-testid="slider"
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(ev) => {
            ev.persist();
            onChange && onChange(ev);
            onChangeNumber && onChangeNumber(Number(ev.target.value));
        }}
    />
);

export default Slider;

const StyledSlider = styled.input`
    ${(props) => {
        const { value, min, max } = props;
        const percent =
            ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100;
        return `
        background: linear-gradient(
            to right, 
            ${props.theme.colors.action.active} 0%, 
            ${props.theme.colors.action.active} ${percent}%, 
            ${props.theme.colors.cell.secondary} ${percent}%, 
            ${props.theme.colors.cell.secondary} 100%
        );
        `;
    }}
    border-radius: 8px;
    height: 6px;
    width: 100%;
    outline: none;
    transition: background 450ms ease-in;
    -webkit-appearance: none;
    position: relative;
    z-index: 3;

    // Add the border on unfilled half
    ::before {
        content: "";
        border-radius: 8px;
        ${(props) => {
            const { value, min, max } = props;
            const percent =
                ((Number(value) - Number(min)) / (Number(max) - Number(min))) *
                100;
            return `
        width: ${100 - percent}%;
        `;
        }}
        outline: 1px solid ${(props) => props.theme.colors.cell.stroke};
        outline-offset: -2px;
        top: -1px;
        bottom: -1px;
        right: -1px;
        position: absolute;
    }

    // Thumb styles
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: ${(props) => props.theme.colors.action.active};
        border: none;
        border-radius: 50%;
        height: 7px;
        width: 7px;
        transform: scale(3);
        cursor: pointer;
    }
    &::-moz-range-thumb {
        background: ${(props) => props.theme.colors.action.hover};
        border: none;
        border-radius: 50%;
        height: 10px;
        width: 10px;
        transform: scale(3);
        cursor: pointer;
    }

    &:hover::-webkit-slider-thumb {
        transition: transform 0.1s ease-in;
        transform: scale(3.5);
    }
    &:hover::-moz-range-thumb {
        transition: transform 0.1s ease-in;
        transform: scale(3.5);
    }
`;
