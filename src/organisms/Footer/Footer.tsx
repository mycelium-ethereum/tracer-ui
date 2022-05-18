// Generated with util/create-component.js
import React from "react";
import { Icon } from "../../atoms";
import styled from "styled-components";
import { device } from "../../helpers";

const Footer: React.FC = () => {
    const copyrightYear = new Date().getFullYear();
    return (
        <FooterContainer data-testid="Footer">
            <span>
                &copy; {copyrightYear} Tracer DAO
            </span>
            <SocialLinkContainer>
                <Link href="https://docs.tracer.finance" target="_blank" rel="noreferrer">
                    <Icon name="book" size="lg" />
                </Link>
                <Link href="https://discourse.tracer.finance" target="_blank" rel="noreferrer">
                    <Icon name="discourse" size="lg" />
                </Link>
                <Link href="https://twitter.com/TracerDAO" target="_blank" rel="noreferrer">
                    <Icon name="twitter" size="lg" />
                </Link>
                <Link href="https://github.com/tracer-protocol/perpetual-pools-contracts" target="_blank" rel="noreferrer">
                    <Icon name="github" size="lg" />
                </Link>
                <Link href="https://discord.com/invite/kddBUqDVVb" target="_blank" rel="noreferrer">
                    <Icon name="discord" size="lg" />
                </Link>
            </SocialLinkContainer>
            <TextLinkContainer>
                <Link href="https://tracer.finance/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
                <Link href="https://tracer.finance/privacy-policy#terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Use</Link>
                <Link href="https://tracer.finance/privacy-policy#interfaces-disclaimer"  target="_blank" rel="noopener noreferrer">Disclaimer</Link>
                <Link href="https://gateway.pinata.cloud/ipfs/QmS161WXV2bEAWUtdecfS5FYPmHQZdhNnjVFAwQ5FTX3og" target="_blank" rel="noopener noreferrer">Participation Agreement</Link>
                <Link href="https://docs.tracer.finance/audits-and-security/perpetual-pools" target="_blank" rel="noopener noreferrer">Security Audits</Link>
            </TextLinkContainer>
        </FooterContainer>
    )
};

const Link = styled.a`
    font-family: ${(props) => props.theme.fontFamily.heading} !important;
    font-size: 16px;
    text-decoration-line: none;
    color: ${({ theme }) => theme.colors.text.primary} !important;
    opacity: 1;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    &:hover {
        opacity: .8;
    }
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    margin: auto;
    width: 100%;
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
`

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
`

const TextLinkContainer = styled.div`
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
    @media ${device.desktop} {
        flex-direction: row;
        gap: 0.75rem
    }
    @media ${device.desktopL} {
        flex-direction: row;
        gap: 0.75
    }
`

export default Footer;

