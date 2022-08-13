// Generated with util/create-component.js
import React from "react";
import { Icon, Text } from "../../atoms";
import styled from "styled-components";
import { device } from "../../helpers";

const Footer: React.FC = () => {
    const copyrightYear = new Date().getFullYear();
    return (
        <FooterContainer className="footer" data-testid="Footer">
            <Text.Body className="footer-copyright" color="highlight">
                &copy; {copyrightYear} Mycelium
            </Text.Body>
            <SocialLinkContainer>
                <Link
                    href="https://swaps.docs.mycelium.xyz"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    <Icon
                        name="book"
                        size="lg"
                        className="footer-icon"
                        color="inherit"
                    />
                </Link>
                <Link
                    href="https://discourse.tracer.finance"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    <Icon
                        name="discourse"
                        size="lg"
                        className="footer-icon"
                        color="inherit"
                    />
                </Link>
                <Link
                    href="https://twitter.com/mycelium_xyz"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    <Icon
                        name="twitter"
                        size="lg"
                        className="footer-icon"
                        color="inherit"
                    />
                </Link>
                <Link
                    href="https://github.com/mycelium-ethereum"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    <Icon
                        name="github"
                        size="lg"
                        className="footer-icon"
                        color="inherit"
                    />
                </Link>
                <Link
                    href="https://discord.gg/4pZUbXDZSF"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    <Icon
                        name="discord"
                        size="lg"
                        className="footer-icon"
                        color="inherit"
                    />
                </Link>
            </SocialLinkContainer>
            <TextLinkContainer className="footer-text-links">
                <Link
                    href="https://tracer.finance/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    Privacy Policy
                </Link>
                <Link
                    href="https://tracer.finance/privacy-policy#terms-of-use"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    Terms of Use
                </Link>
                <Link
                    href="https://tracer.finance/privacy-policy#interfaces-disclaimer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    Disclaimer
                </Link>
                <Link
                    href="https://gateway.pinata.cloud/ipfs/QmS161WXV2bEAWUtdecfS5FYPmHQZdhNnjVFAwQ5FTX3og"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    Participation Agreement
                </Link>
                <Link
                    href="https://docs.tracer.finance/security/audits-and-security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    Security Audits
                </Link>
            </TextLinkContainer>
        </FooterContainer>
    );
};

const Link = styled.a`
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-size: 16px;
    text-decoration-line: none;
    font-size: 16px;
    text-decoration-line: none;
    opacity: 1;
    transition-property: opacity;

    color: inherit;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    &:hover {
        opacity: 0.8;
    }
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    margin: auto;
    width: 100%;

    font-family: ${(props) => props.theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.text.highlight};

    @media ${device.mobileL} {
        max-width: 540px;
    }
    @media ${device.tablet} {
        max-width: 720px;
    }
    @media ${device.laptop} {
        max-width: 960px;
    }
    @media ${device.desktop} {
        max-width: 1140px;
        flex-direction: row;
    }
    @media ${device.desktopL} {
        max-width: 1320px;
        flex-direction: row;
    }
`;

const SocialLinkContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    margin: 1.5rem 0rem;
    @media ${device.desktop} {
        margin: auto;
    }
    @media ${device.desktopL} {
        margin: auto;
    }
`;

const TextLinkContainer = styled.div`
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
    @media ${device.desktop} {
        flex-direction: row;
        gap: 0.75rem;
    }
    @media ${device.desktopL} {
        flex-direction: row;
        gap: 0.75;
    }
`;

export default Footer;
