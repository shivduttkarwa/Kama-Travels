import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyles';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.98)' : 'white'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.2s ease;
  border-bottom: 1px solid ${props => props.scrolled ? theme.colors.border : 'transparent'};
  box-shadow: ${props => props.scrolled ? theme.shadows.small : 'none'};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    z-index: ${props => props.menuOpen ? '1002' : '1000'};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 80px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 16px;
    height: 72px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  img {
    height: 56px;
    width: auto;
    object-fit: contain;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      height: 48px;
      -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
    }
  }
  
  .logo-text {
    font-family: ${theme.fonts.heading};
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.primary};
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 1.75rem;
    }
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      display: none;
    }
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  &:focus,
  &:active,
  &:hover {
    background: none !important;
    outline: none !important;
    box-shadow: none !important;
    -webkit-tap-highlight-color: transparent !important;
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
  
  /* Additional mobile-specific fixes */
  @media (max-width: ${theme.breakpoints.tablet}) {
    -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
    -webkit-focus-ring-color: rgba(0,0,0,0) !important;
    tap-highlight-color: rgba(0,0,0,0) !important;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #003580 0%, #0066cc 100%);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 40px 330px 37px;
    gap: 25px;
    z-index: 999;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('/assets/images/hero-fallback.jpg') center/cover;
      opacity: 0.1;
      z-index: -1;
    }
  }
`;

const NavLink = styled.a`
  color: ${theme.colors.textPrimary};
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  
  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-2px);
  }
  
  &.active {
    color: ${theme.colors.primary};
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: ${theme.colors.primary};
      border-radius: 1px;
    }
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    color: white;
    font-size: 3rem;
    font-weight: 300;
    font-family: ${theme.fonts.heading};
    letter-spacing: -3px;
    line-height: 0.9;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    text-align: left;
    width: 100%;
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    &:hover {
      color: #ffffff;
      transform: translateX(10px);
    }
    
    &.active {
      color: #ffffff;
      
      &:after {
        display: none;
      }
    }
    
    &.animate-in {
      opacity: 1;
      transform: translateX(0);
    }
    
    &:nth-child(1) { 
      transition-delay: 0.1s; 
    }
    &:nth-child(2) { 
      transition-delay: 0.2s; 
    }
    &:nth-child(3) { 
      transition-delay: 0.3s; 
    }
    &:nth-child(4) { 
      transition-delay: 0.4s; 
    }
    &:nth-child(5) { 
      transition-delay: 0.5s; 
    }
    
    @media (max-width: 400px) {
      font-size: 2.5rem;
      letter-spacing: -2px;
    }
    
    @media (max-width: 350px) {
      font-size: 2rem;
      letter-spacing: -1px;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: 12px;
  }
`;

const GetAppButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: ${theme.borderRadius.medium};
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${theme.colors.navy};
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MenuToggle = styled.button`
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1001;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  outline: none;
  
  &:hover {
    transform: scale(1.1);
  }
  
  span {
    width: 28px;
    height: 3px;
    background: ${theme.colors.textPrimary};
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 3px;
    transform-origin: center;
  }
  
  &.open span {
    background: white;
  }
  
  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(0px, 6.3px);
  }
  
  &.open span:nth-child(2) {
    transform: rotate(-45deg) translate(0px, -6.3px);
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MobileMenuFooter = styled.div`
  display: none;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
    position: absolute;
    bottom: 40px;
    left: 37px;
    right: 40px;
    
    .follow-us {
      position: absolute;
      bottom: 240px;
      left: 0;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
      font-weight: 300;
      letter-spacing: 2px;
      text-transform: uppercase;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transition-delay: 0.6s;
      text-align: left;
    }
    
    .social-links {
      position: absolute;
      right: 0;
      bottom: 160px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      opacity: 0;
      transform: translateX(30px);
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transition-delay: 0.7s;
      
      a {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        font-weight: 300;
        font-family: ${theme.fonts.heading};
        letter-spacing: 1px;
        text-transform: uppercase;
        text-decoration: none;
        text-align: right;
        transition: all 0.3s ease;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
        
        &:hover {
          color: white;
          transform: translateX(-5px);
        }
        
        &:nth-child(1) { transition-delay: 0.8s; }
        &:nth-child(2) { transition-delay: 0.85s; }
        &:nth-child(3) { transition-delay: 0.9s; }
        &:nth-child(4) { transition-delay: 0.95s; }
      }
      
      @media (max-width: 400px) {
        font-size: 0.9rem;
        gap: 6px;
      }
    }
    
    &.animate-in .follow-us {
      opacity: 1;
      transform: translateY(0);
    }
    
    &.animate-in .social-links {
      opacity: 1;
      transform: translateX(0);
      
      a {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth menu close function for non-navigation clicks
  const handleMenuItemClick = () => {
    // Start the closing animation by setting menu to false immediately
    // This allows the slide-out animation to begin
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 100); // Small delay to allow click animation to start
  };

  // Smooth navigation handler for menu links
  const handleSmoothNavigation = (path) => {
    // Start the mobile menu slide-out animation immediately
    setIsMenuOpen(false);
    
    // Give a small delay to let the slide-out animation start,
    // then navigate while the menu continues sliding out
    setTimeout(() => {
      navigate(path);
    }, 100); // Small delay to ensure slide-out starts smoothly
  };

  // Enhanced hamburger menu toggle handler
  const handleMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle menu animation and body scroll
  useEffect(() => {
    const navLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileFooter = document.querySelector('.mobile-menu-footer');
    
    if (isMenuOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      
      // Animate in with delay
      setTimeout(() => {
        navLinks.forEach((link) => {
          link.classList.add('animate-in');
        });
        if (mobileFooter) {
          mobileFooter.classList.add('animate-in');
        }
      }, 300);
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      
      // Animate out
      navLinks.forEach((link) => {
        link.classList.remove('animate-in');
      });
      if (mobileFooter) {
        mobileFooter.classList.remove('animate-in');
      }
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Only update active section if we're on the home page
      if (location.pathname === '/') {
        const sections = ['home', 'services', 'destinations', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      // Scroll to top for home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 72;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer scrolled={scrolled} menuOpen={isMenuOpen}>
      <Nav>
        <Logo>
          <LogoLink to="/">
            <img src="/assets/logo/KAMA TRAVELS LOGO.png" alt="Kama Travels" />
          </LogoLink>
        </Logo>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink 
            className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => handleSmoothNavigation('/')}
          >
            Home
          </NavLink>
          
          <NavLink 
            className={`mobile-nav-link ${location.pathname === '/destinations' ? 'active' : ''}`}
            onClick={() => handleSmoothNavigation('/destinations')}
          >
            Destinations
          </NavLink>
          
          <NavLink 
            className={`mobile-nav-link ${location.pathname === '/packages' ? 'active' : ''}`}
            onClick={() => handleSmoothNavigation('/packages')}
          >
            Packages
          </NavLink>
          
          <NavLink 
            className={`mobile-nav-link ${location.pathname === '/services' ? 'active' : ''}`}
            onClick={() => handleSmoothNavigation('/services')}
          >
            Services
          </NavLink>
          
          <NavLink 
            className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => handleSmoothNavigation('/contact')}
          >
            Contact
          </NavLink>
          
          <MobileMenuFooter className={isMenuOpen ? 'animate-in' : ''}>
            <div className="follow-us">Follow Us</div>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </MobileMenuFooter>
        </NavLinks>
        
        <ActionButtons>
          <GetAppButton as={Link} to="/contact">Contact Us</GetAppButton>
          <MenuToggle 
            className={isMenuOpen ? 'open' : ''}
            onClick={handleMenuToggle}
            onTouchEnd={handleMenuToggle}
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span></span>
            <span></span>
          </MenuToggle>
        </ActionButtons>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;