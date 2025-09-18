import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';

const TransitionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const PageWrapper = styled.div`
  will-change: auto;
  background-color: #ffffff;
`;

const SimplePageTransition = ({ children }) => {
  const location = useLocation();
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <TransitionContainer>
      <PageWrapper ref={wrapperRef}>
        {children}
      </PageWrapper>
    </TransitionContainer>
  );

  return (
    <TransitionContainer>
      <PageWrapper ref={wrapperRef}>
        {children}
      </PageWrapper>
    </TransitionContainer>
  );
};

export default SimplePageTransition;