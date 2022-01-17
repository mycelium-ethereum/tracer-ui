// Generated with util/create-component.js
export type SelectOption = {
    value: string;
    title: string;
    subtitle?: string;
    imageSrc?: string;
    rightContent?: React.ReactNode;
};

export interface SelectProps {
    placeholder?: string;
    options: SelectOption[];
    onChange: (value: string) => void;
    value?: string;
}
