import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../styles/GlobalStyles';

const FooterContainer = styled.footer`
  background: #fbfbfd;
`;

const FooterTop = styled.div`
  padding: 120px 0px 270px;
  position: relative;
  overflow-x: hidden;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  gap: 40px;
  
  /* Mobile layout: Quick Links and Support on top row, Follow Us on bottom */
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "quicklinks support"
    "follow follow";
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "quicklinks support follow";
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const FooterWidget = styled.div`
  .footer-title {
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.textPrimary};
    margin-bottom: 30px;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  
  .footer-text {
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    color: ${theme.colors.textSecondary};
    margin-bottom: 20px;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 15px;
    }
  }
  
  /* Grid area assignments for mobile layout */
  &:nth-child(1) {
    grid-area: quicklinks;
    @media (max-width: ${theme.breakpoints.mobile}) {
      text-align: center;
    }
  }
  
  &:nth-child(2) {
    grid-area: support;
    @media (max-width: ${theme.breakpoints.mobile}) {
      text-align: center;
    }
  }
  
  &:nth-child(3) {
    grid-area: follow;
    @media (max-width: ${theme.breakpoints.mobile}) {
      text-align: center;
    }
  }
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      grid-area: auto;
    }
  }
`;

const SubscribeForm = styled.form`
  .form-input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    font-size: 14px;
    color: ${theme.colors.textSecondary};
    background: #fff;
    margin-bottom: 15px;
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
    }
    
    &::placeholder {
      color: ${theme.colors.textLight};
    }
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      padding: 10px 12px;
      font-size: 13px;
      margin-bottom: 12px;
    }
  }
  
  .subscribe-btn {
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: #fff;
    padding: 12px 25px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 20px;
    width: 100%;
    
    &:hover {
      background: ${theme.colors.secondary};
      border-color: ${theme.colors.secondary};
    }
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      padding: 10px 20px;
      font-size: 13px;
      margin-top: 15px;
    }
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 11px;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    a {
      color: ${theme.colors.textSecondary};
      text-decoration: none;
      font-size: 14px;
      transition: color 0.3s ease;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      user-select: none;
      
      &:hover {
        color: ${theme.colors.primary};
      }
      
      @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 13px;
      }
    }
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      margin-bottom: 8px;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
  }
  
  a {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    color: white;
    border: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    
    /* Facebook */
    &[aria-label="Facebook"] {
      background: #1877F2;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(24, 119, 242, 0.4);
      }
    }
    
    /* Instagram */
    &[aria-label="Instagram"] {
      background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80);
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(225, 48, 108, 0.4);
      }
    }
    
    /* X (Twitter) */
    &[aria-label="X"] {
      background: #000000;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      }
    }
    
    /* YouTube */
    &[aria-label="YouTube"] {
      background: #FF0000;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 0, 0, 0.4);
      }
    }
    
    svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      width: 38px;
      height: 38px;
      
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

const AnimatedCTA = styled.div`
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  padding: 50px 40px;
  overflow: hidden;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 8px 32px rgba(31, 38, 135, 0.37),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 40px 25px;
    min-height: 240px;
    border-radius: 20px;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 10;
  color: white;
  
  h3 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 16px;
    background: linear-gradient(45deg, #ffffff, #e0e7ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 4px 8px rgba(0,0,0,0.2);
    letter-spacing: -0.5px;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 24px;
      margin-bottom: 12px;
    }
  }
  
  p {
    font-size: 18px;
    margin-bottom: 32px;
    opacity: 0.9;
    line-height: 1.6;
    font-weight: 300;
    max-width: 400px;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 16px;
      margin-bottom: 28px;
      max-width: 300px;
    }
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(45deg, #ff6b6b, #ee5a6f);
  color: white;
  border: none;
  padding: 18px 40px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 
    0 8px 32px rgba(255, 107, 107, 0.3),
    0 4px 16px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 
      0 12px 40px rgba(255, 107, 107, 0.4),
      0 8px 24px rgba(0, 0, 0, 0.15);
    background: linear-gradient(45deg, #ff5252, #e91e63);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 16px 32px;
    font-size: 14px;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const FloatingPlane = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  opacity: 0.1;
  
  &:nth-child(1) {
    top: 15%;
    left: -60px;
    animation: flyAcross1 20s linear infinite;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    top: 75%;
    right: -60px;
    animation: flyAcross2 25s linear infinite;
    animation-delay: 8s;
  }
  
  &:nth-child(3) {
    top: 45%;
    left: -60px;
    animation: flyAcross1 30s linear infinite;
    animation-delay: 15s;
  }
  
  svg {
    width: 100%;
    height: 100%;
    fill: white;
    filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
  }
  
  @keyframes flyAcross1 {
    0% {
      transform: translateX(0) rotate(0deg) scale(0.8);
      opacity: 0;
    }
    10% {
      opacity: 0.1;
    }
    50% {
      transform: translateX(50vw) rotate(5deg) scale(1);
      opacity: 0.15;
    }
    90% {
      opacity: 0.1;
    }
    100% {
      transform: translateX(100vw) rotate(0deg) scale(0.8);
      opacity: 0;
    }
  }
  
  @keyframes flyAcross2 {
    0% {
      transform: translateX(0) rotate(180deg) scale(0.8);
      opacity: 0;
    }
    10% {
      opacity: 0.1;
    }
    50% {
      transform: translateX(-50vw) rotate(175deg) scale(1);
      opacity: 0.15;
    }
    90% {
      opacity: 0.1;
    }
    100% {
      transform: translateX(-100vw) rotate(180deg) scale(0.8);
      opacity: 0;
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
  }
`;

const WavePattern = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 80px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' fill='%23ffffff' opacity='0.1'%3E%3C/path%3E%3Cpath d='M1200,0H0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' fill='%23ffffff' opacity='0.05'%3E%3C/path%3E%3C/svg%3E") repeat-x;
  background-size: 1200px 80px;
  animation: gentleWave 15s ease-in-out infinite;
  opacity: 0.3;
  
  @keyframes gentleWave {
    0%, 100% {
      transform: translateX(0) translateY(0);
    }
    33% {
      transform: translateX(-100px) translateY(-5px);
    }
    66% {
      transform: translateX(-200px) translateY(5px);
    }
  }
`;

const ParticleField = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    background: white;
    border-radius: 50%;
    opacity: 0;
    animation: sparkle 4s ease-in-out infinite;
  }
  
  &::before {
    top: 20%;
    left: 15%;
    animation-delay: 0s;
  }
  
  &::after {
    top: 70%;
    right: 20%;
    animation-delay: 2s;
  }
  
  @keyframes sparkle {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 0.8;
      transform: scale(1);
    }
  }
`;

const FooterBg = styled.div`
  position: absolute;
  bottom: 0;
  background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png") no-repeat scroll center 0;
  width: 100%;
  height: 266px;
`;

const FooterBgOne = styled.div`
  background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif") no-repeat center center;
  width: 330px;
  height: 105px;
  background-size: 100%;
  position: absolute;
  bottom: 0;
  left: 30%;
  animation: moveRight 22s linear infinite;
`;

const FooterBgTwo = styled.div`
  background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif") no-repeat center center;
  width: 88px;
  height: 100px;
  background-size: 100%;
  bottom: 0;
  left: 38%;
  position: absolute;
  animation: moveRight 30s linear infinite;
`;

const FooterBottom = styled.div`
  padding: 27px 0;
  
  .footer-bottom-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      flex-direction: column;
      text-align: center;
    }
  }
  
  .copyright {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: ${theme.colors.textLight};
    margin: 0;
  }
  
  .made-with {
    font-size: 14px;
    color: ${theme.colors.textLight};
    margin: 0;
    
    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      user-select: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

// Add keyframes for animation
const GlobalStyle = styled.div`
  @keyframes moveRight {
    0% {
      left: -25%;
    }
    100% {
      left: 100%;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <GlobalStyle />
      <FooterContainer className="new_footer_area bg_color">
        <FooterTop className="new_footer_top">
          <FooterWrapper>
            <FooterGrid>
              {/* Quick Links */}
              <FooterWidget>
                <h3 className="footer-title">Quick Links</h3>
                <FooterList>
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/destinations">Destinations</Link></li>
                  <li><Link to="/packages">Travel Packages</Link></li>
                  <li><Link to="/booking">Book Now</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </FooterList>
              </FooterWidget>

              {/* Support */}
              <FooterWidget>
                <h3 className="footer-title">Support</h3>
                <FooterList>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                  <li><Link to="/cancellation-policy">Cancellation Policy</Link></li>
                  <li><Link to="/contact">Customer Support</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                </FooterList>
              </FooterWidget>

              {/* Follow Us */}
              <FooterWidget>
                <h3 className="footer-title">Follow Us</h3>
                <SocialIcons>
                  <a href="#" aria-label="Facebook">
                    <svg viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="X">
                    <svg viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <svg viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </SocialIcons>
              </FooterWidget>
            </FooterGrid>
          </FooterWrapper>
          
          <FooterBg>
            <FooterBgOne />
            <FooterBgTwo />
          </FooterBg>
        </FooterTop>
        
        <FooterBottom>
          <div className="footer-bottom-wrapper">
            <p className="copyright">© Kama Travels Inc. 2025 All rights reserved.</p>

          </div>
        </FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;