import React from "react";

// Generated with util/create-component.js
export interface SearchableDropdownProps
    extends React.HTMLProps<HTMLInputElement> {
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
    isDropdownOpen: boolean;
    emptyText?: string;
    onFocusOut?: () => void;
}
