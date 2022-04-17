import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebstiteRights, SocialIcons, SocialIconLink } from './FooterElements';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Testimonials</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Terms of Services</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Quick link</FooterLinkTitle>
                            <FooterLink>Knowlage Base</FooterLink>
                            <FooterLink>Hire an expert</FooterLink>
                            <FooterLink>FAQ</FooterLink>
                            <FooterLink>Hire an expert</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Events</FooterLinkTitle>
                            <FooterLink>School</FooterLink>
                            <FooterLink>Online</FooterLink>
                            <FooterLink>University</FooterLink>
                            <FooterLink>Conditions</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Information</FooterLinkTitle>
                            <FooterLink>Business</FooterLink>
                            <FooterLink>Apply now</FooterLink>
                            <FooterLink>Services</FooterLink>
                            <FooterLink>Contacts</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo  to='/' onClick={toggleHome}><span
                        style={{ color: '#FF6366' }}>Go back to top </span>
                        </SocialLogo>
                        <WebstiteRights>MathTeacher © {new Date().getFullYear()}All rights reserved.</WebstiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />

                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;