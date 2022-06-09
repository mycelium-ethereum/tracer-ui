// Generated with util/create-component.js
export interface NavbarProps<Link extends string> {
    links: {
        label: string;
        href: Link;
    }[];
    homeHref: string;
    productName: string;
    onClickLink?: (link: Link) => void;
    children?: React.ReactNode;
}

export interface HeaderSiteSwitcherProps {
    className?: string;
    href: string;
}
