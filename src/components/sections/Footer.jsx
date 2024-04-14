import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {

  const yourWhatsAppNumber = "6385916880"; 
  const handleWhatsAppClick = () => {
    const defaultMessage = "Hi Santhosh! I came across your impressive portfolio and would love to discuss potential opportunities with you. Do you have a few minutes to chat on WhatsApp?";
    const whatsappLink = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.location.href = whatsappLink;
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Santhosh Srinivasan</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Contact">Contact</NavLink>

        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.phone} target="display">
            <PhoneIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href="#" target="display" onClick={handleWhatsAppClick}>
            <WhatsAppIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display">
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.youtube} target="display">
            <YouTubeIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Santhosh Srinivasan. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
