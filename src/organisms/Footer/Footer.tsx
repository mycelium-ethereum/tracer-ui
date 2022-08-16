// Generated with util/create-component.js
import React from "react";
import { Icon } from "../../atoms";
import styled from "styled-components";
import { device } from "../../helpers";

const Footer: React.FC = () => {
    const copyrightYear = new Date().getFullYear();
    return (
        <FooterContainer className="footer" data-testid="Footer">
            <FooterContainerInner>
                <FlexContainer>
                    <CopyrightText
                        className="footer-copyright"
                        color="highlight"
                    >
                        &copy; {copyrightYear} Mycelium
                    </CopyrightText>
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
                            href="https://discord.gg/mycelium-xyz"
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
                </FlexContainer>

                <TextLinkContainer className="footer-text-links">
                    <Link
                        href="https://mycelium.xyz/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="https://mycelium.xyz/terms-of-use"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Terms of Use
                    </Link>
                    {/* <Link
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
                </Link> */}
                </TextLinkContainer>
            </FooterContainerInner>
        </FooterContainer>
    );
};

const Link = styled.a`
    font-size: 16px;
    text-decoration-line: none;
    opacity: 1;
    color: inherit;
    transition: color 0.3s ease;

    &:hover {
        color: #098200;
    }
`;

const FooterContainer = styled.footer`
    font-family: ${(props) => props.theme.fontFamily.sans};
    padding: 0 24px;
`;

const FooterContainerInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    padding: 1rem;
    margin: auto;
    width: 100%;
    border-top: 1px solid #098200;
    padding: 26px 0;
    margin: 0 auto;
    color: white;
    width: 100%;
    @media ${device.tablet} {
        flex-direction: row;
        align-items: center;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    margin-top: 37px;
    @media ${device.tablet} {
        column-gap: 1.5rem /* 24px */;
        margin-top: 0;
    }
`;

const CopyrightText = styled.span`
    display: block;
    font-size: 14px;
    line-height: 21px;
    color: white;
    margin-right: 40px;
    white-space: nowrap;
`;

const SocialLinkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 1rem /* 16px */;
    @media ${device.tablet} {
        column-gap: 1.5rem /* 24px */;
    }
    .footer-icon {
        transition: color 0.3s ease;
    }
    .footer-icon:hover {
        color: #098200;
    }
`;

const TextLinkContainer = styled.div`
    display: flex;
    gap: 40px;
    font-size: 14px;
    @media ${device.tablet} {
        gap: 40px;
    }
`;

export default Footer;
