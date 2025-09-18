import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled, { createGlobalStyle } from 'styled-components';

// Pages
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import BookingPage from './pages/BookingPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PackagesPage from './pages/PackagesPage';
import PackageDetailPage from './pages/PackageDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FAQPage from './pages/FAQPage';
import CancellationPolicyPage from './pages/CancellationPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

// Components
import SimplePageTransition from './components/AdvancedPageTransition';
import Header from './components/Header';
import Footer from './components/Footer';

// Styles
import { theme } from './styles/GlobalStyles';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.primary};
    line-height: 1.6;
    color: ${theme.colors.textDark};
    overflow-x: hidden;
    background: white;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  /* Smooth page transitions */
  .page-transition {
    opacity: 0;
    transform: translateY(20px);
  }

  .page-transition.loaded {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.6s ease-out;
  }

  /* Loading animation */
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }

  .loading-overlay.hidden {
    opacity: 0;
    visibility: hidden;
  }

  .loader {
    width: 60px;
    height: 60px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Floating animation for elements */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .floating {
    animation: float 3s ease-in-out infinite;
  }

  /* Pulse animation */
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(102, 126, 234, 0);
    }
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  /* Reveal animation classes */
  .reveal {
    opacity: 0;
    transform: translateY(50px);
  }

  .reveal.active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.6s ease-out;
  }

  /* Slide animations */
  .slide-left {
    opacity: 0;
    transform: translateX(-50px);
  }

  .slide-left.active {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.6s ease-out;
  }

  .slide-right {
    opacity: 0;
    transform: translateX(50px);
  }

  .slide-right.active {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.6s ease-out;
  }

  /* Scale animation */
  .scale-in {
    opacity: 0;
    transform: scale(0.8);
  }

  .scale-in.active {
    opacity: 1;
    transform: scale(1);
    transition: all 0.6s ease-out;
  }
`;

const AppContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  background-color: #ffffff;
  min-height: 100vh;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0066cc 0%, #1a73e8 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="1"/></g></svg>') repeat;
    animation: backgroundMove 20s linear infinite;
  }
  
  @keyframes backgroundMove {
    0% { transform: translateX(0) translateY(0); }
    100% { transform: translateX(-60px) translateY(-60px); }
  }
  
  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  z-index: 2;
  animation: containerFadeIn 1s ease-out;
  
  @keyframes containerFadeIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BrandText = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 4px;
  margin-bottom: 10px;
  text-shadow: 0 2px 20px rgba(255, 255, 255, 0.3);
  animation: textGlow 2s ease-in-out infinite alternate;
  
  @keyframes textGlow {
    0% {
      text-shadow: 0 2px 20px rgba(255, 255, 255, 0.3);
    }
    100% {
      text-shadow: 0 2px 30px rgba(255, 255, 255, 0.6);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 3px;
  }
`;

const PlaneLoader = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  
  /* Outer glowing ring */
  &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border: 2px dashed rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: ringRotate 8s linear infinite;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  
  /* Inner pulsing circle */
  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    top: 20px;
    left: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: innerPulse 2s ease-in-out infinite;
  }
  
  @keyframes ringRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes innerPulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`;

const PlaneIcon = styled.div`
  position: absolute;
  font-size: 24px;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  animation: planeOrbit 3s linear infinite;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
  
  @keyframes planeOrbit {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) translateX(50px) rotate(0deg);
    }
    25% {
      transform: translate(-50%, -50%) rotate(90deg) translateX(50px) rotate(-90deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg) translateX(50px) rotate(-180deg);
    }
    75% {
      transform: translate(-50%, -50%) rotate(270deg) translateX(50px) rotate(-270deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) translateX(50px) rotate(-360deg);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Loader = styled.div`
  display: none;
`;

const LoadingText = styled.div`
  display: none;
`;

const SubText = styled.div`
  display: none;
`;

const AppContent = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [hasInitialLoad, setHasInitialLoad] = useState(false);

  useEffect(() => {
    // Show loading on any initial page load (refresh)
    if (!hasInitialLoad) {
      setIsLoading(true);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
        setHasInitialLoad(true);
      }, 400); // Even shorter to prevent double fade

      return () => clearTimeout(timer);
    } else {
      // For all other page navigations, no loading screen
      setIsLoading(false);
    }
  }, [location.pathname, hasInitialLoad]);

  return (
    <>
      {isLoading && (
        <LoadingOverlay>
          <LoaderContainer>
            <BrandText>KAMA TRAVELS</BrandText>
            <PlaneLoader>
              <PlaneIcon>✈️</PlaneIcon>
            </PlaneLoader>
          </LoaderContainer>
        </LoadingOverlay>
      )}
      
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<SimplePageTransition><HomePage /></SimplePageTransition>} />
          <Route path="/destinations" element={<SimplePageTransition><DestinationsPage /></SimplePageTransition>} />
          <Route path="/packages" element={<SimplePageTransition><PackagesPage /></SimplePageTransition>} />
          <Route path="/packages/:slug" element={<SimplePageTransition><PackageDetailPage /></SimplePageTransition>} />
          <Route path="/services" element={<SimplePageTransition><ServicesPage /></SimplePageTransition>} />
          <Route path="/contact" element={<SimplePageTransition><ContactPage /></SimplePageTransition>} />
          <Route path="/booking" element={<SimplePageTransition><BookingPage /></SimplePageTransition>} />
          <Route path="/privacy-policy" element={<SimplePageTransition><PrivacyPolicyPage /></SimplePageTransition>} />
          <Route path="/faq" element={<SimplePageTransition><FAQPage /></SimplePageTransition>} />
          <Route path="/cancellation-policy" element={<SimplePageTransition><CancellationPolicyPage /></SimplePageTransition>} />
          <Route path="/terms-conditions" element={<SimplePageTransition><TermsConditionsPage /></SimplePageTransition>} />
        </Routes>
        <Footer />
      </AppContainer>
    </>
  );
};

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContent />
    </Router>
  );
}

export default App;