import React from 'react';
import styled from 'styled-components';
import { theme, Container } from '../styles/GlobalStyles';

const HeroSectionWrapper = styled.section`
  position: relative;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%),
              url(${props => props.backgroundImage}) center/cover;
  color: white;
  padding: ${props => props.padding || '140px 0 100px'};
  text-align: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.overlay || 'transparent'};
    ${props => props.animatedPattern && `
      background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="1"/></g></svg>') repeat;
      animation: backgroundMove 20s linear infinite;
    `}
    z-index: 1;
  }
  
  @keyframes backgroundMove {
    0% { transform: translateX(0) translateY(0); }
    100% { transform: translateX(-60px) translateY(-60px); }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  animation: heroSlideUp 1s ease-out;
  
  @keyframes heroSlideUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.375rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  animation: heroSlideUp 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroSection = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  overlay,
  animatedPattern,
  padding,
  children,
  titleRef,
  className 
}) => {
  return (
    <HeroSectionWrapper 
      backgroundImage={backgroundImage} 
      overlay={overlay}
      animatedPattern={animatedPattern}
      padding={padding}
      className={className}
    >
      <Container>
        <HeroContent>
          <HeroTitle ref={titleRef}>{title}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
          {children}
        </HeroContent>
      </Container>
    </HeroSectionWrapper>
  );
};

export default HeroSection;