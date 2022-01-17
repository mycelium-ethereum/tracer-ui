// Generated with util/create-component.js
export interface WelcomeCardProps {
    title: string;
    subtitle: string;
    heroItems: {
        label: string;
        imgSrc: string;
        imgAlt?: string;
    }[];
    footerText: string;
    buttonText: string;
    onButtonClick?: () => void;
    buttonHref?: string;
}
