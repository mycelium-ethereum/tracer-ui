// Generated with util/create-component.js
export interface NavDropdownButtonProps {
    dropdownItems: Array<{
        key: string;
        content: string | JSX.Element;
    }>;
    onItemClick: (key: string) => void;
    placement?: "bottom-start" | "bottom-end" | "bottom";
}
