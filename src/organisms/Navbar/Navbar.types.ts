// Generated with util/create-component.js
export interface NavbarProps<Link extends string> {
    links: Link[];
    activeLink: Link;
    href: string;
    onClickLink?: (link: Link) => void;
    children?: React.ReactNode;
}

export interface HeaderSiteSwitcherProps {
    className?: string;
    href: string;
}
