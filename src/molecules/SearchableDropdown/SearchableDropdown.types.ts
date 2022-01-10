// Generated with util/create-component.js
export interface SearchableDropdownProps {
    options: Array<{
        value: string;
        searchTerms: string[];
        title: string;
        subtitle?: string;
        imageSrc?: string;
        rightContent?: JSX.Element;
    }>;
    placeholder?: string;
    onClickItem?: (value: string) => void;
}
