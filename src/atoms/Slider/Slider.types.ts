// Generated with util/create-component.js
export interface SliderProps
    extends Omit<React.HTMLProps<HTMLInputElement>, "onChange" | "value"> {
    value: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
}
