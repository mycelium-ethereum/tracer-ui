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
    ...rest
}) => (
    <div data-testid="slider">
        <StyledSlider
            {...(rest as StyledComponent<"input", DefaultTheme, {}, never>)}
            type="range"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(ev) => onChange(Number(ev.target.value))}
        />
    </div>
);

export default Slider;

const StyledSlider = styled.input`
    background: ${(props) => {
        const { value, min, max } = props;
        const percent =
            ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100;
        return `linear-gradient(
            to right, 
            ${props.theme.colors.action.active} 0%, 
            ${props.theme.colors.action.active} ${percent}%, 
            ${props.theme.colors.focus.active} ${percent}%, 
            ${props.theme.colors.focus.active} 100%
        )`;
    }};
    border-radius: 8px;
    height: 20px;
    width: 100%;
    outline: none;
    transition: background 450ms ease-in;
    -webkit-appearance: none;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: ${(props) => props.theme.colors.action.hover};
        border: none;
        border-radius: 50%;
        height: 10px;
        width: 10px;
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
