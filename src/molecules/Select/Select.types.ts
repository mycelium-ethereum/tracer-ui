// Generated with util/create-component.js
export type SelectOption = {
    value: string;
    title: string;
    subtitle?: string;
    imageSrc?: string;
    rightContent?: React.ReactNode;
};

export interface SelectProps {
    options: SelectOption[];
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    name?: string;
    form?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    emptyText?: string;
}
