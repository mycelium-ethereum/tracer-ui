// Generated with util/create-component.js
export interface SliderProps
    extends Omit<React.HTMLProps<HTMLInputElement>, "onChange" | "value"> {
    value: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeNumber?: (value: number) => void;
}
