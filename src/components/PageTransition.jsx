import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme } from '../styles/GlobalStyles';

const TransitionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const PageWrapper = styled.div`
  opacity: 0;
  will-change: transform, opacity;
`;

const TransitionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  pointer-events: none;
`;

const SlidePanel = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0066cc 0%, #1a73e8 50%, #667eea 100%);
  transform: translateX(-100%);
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></svg>') repeat;
    animation: float 20s linear infinite;
  }
  
  @keyframes float {
    0% { transform: translateX(0) translateY(0); }
    100% { transform: translateX(-60px) translateY(-60px); }
  }
`;

const SecondPanel = styled(SlidePanel)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8E44AD 100%);
  transform: translateX(-110%);
`;

const ThirdPanel = styled(SlidePanel)`
  background: linear-gradient(135deg, #8E44AD 0%, #3498DB 50%, #0066cc 100%);
  transform: translateX(-120%);
`;

const LoadingElement = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  opacity: 0;
  
  .logo {
    font-size: 24px;
    font-weight: 600;
    color: white;
    letter-spacing: 2px;
    font-family: ${theme.fonts.heading};
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const PageTransition = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const panel1Ref = useRef(null);
  const panel2Ref = useRef(null);
  const panel3Ref = useRef(null);
  const loadingRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      // First render - elegant fade in
      isFirstRender.current = false;
      
      gsap.set(wrapperRef.current, { 
        opacity: 0,
        y: 20,
        scale: 0.98
      });
      
      gsap.to(wrapperRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
      });
      return;
    }

    // Advanced page transition
    const tl = gsap.timeline({
      onStart: () => {
        if (containerRef.current) {
          containerRef.current.style.pointerEvents = 'none';
        }
      },
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.pointerEvents = 'auto';
        }
      }
    });

    // Reset panel positions
    gsap.set([panel1Ref.current, panel2Ref.current, panel3Ref.current], {
      x: '-100%'
    });
    
    gsap.set(panel2Ref.current, { x: '-110%' });
    gsap.set(panel3Ref.current, { x: '-120%' });
    gsap.set(loadingRef.current, { opacity: 0, scale: 0.8 });

    // 1. Fade out current page with subtle scale
    tl.to(wrapperRef.current, {
      opacity: 0,
      scale: 0.95,
      y: -30,
      duration: 0.4,
      ease: "power2.in"
    })
    
    // 2. Slide panels in with staggered timing
    .to(panel1Ref.current, {
      x: '0%',
      duration: 0.6,
      ease: "power3.inOut"
    }, "-=0.2")
    
    .to(panel2Ref.current, {
      x: '0%',
      duration: 0.6,
      ease: "power3.inOut"
    }, "-=0.5")
    
    .to(panel3Ref.current, {
      x: '0%',
      duration: 0.6,
      ease: "power3.inOut"
    }, "-=0.4")
    
    // 3. Show loading element briefly
    .to(loadingRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)"
    }, "-=0.3")
    
    // 4. Hold for a moment
    .to({}, { duration: 0.2 })
    
    // 5. Hide loading and prepare new content
    .to(loadingRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      ease: "power2.in"
    })
    
    .set(wrapperRef.current, {
      y: 40,
      scale: 0.95,
      opacity: 0
    })
    
    // 6. Slide panels out in reverse order
    .to(panel3Ref.current, {
      x: '100%',
      duration: 0.6,
      ease: "power3.inOut"
    }, "-=0.1")
    
    .to(panel2Ref.current, {
      x: '100%',
      duration: 0.6,
      ease: "power3.inOut"
    }, "-=0.5")
    
    .to(panel1Ref.current, {
      x: '100%',
      duration: 0.6,
      ease: "power3.inOut"
    }, "-=0.4")
    
    // 7. Fade in new page with elegant entrance
    .to(wrapperRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");

    // Smooth scroll to top
    if (window.pageYOffset > 0) {
      gsap.to(window, {
        scrollTo: { y: 0 },
        duration: 0.6,
        ease: "power2.out"
      });
    }

  }, [location.pathname]);

  return (
    <TransitionContainer ref={containerRef}>
      <TransitionOverlay>
        <ThirdPanel ref={panel3Ref} />
        <SecondPanel ref={panel2Ref} />
        <SlidePanel ref={panel1Ref}>
          <LoadingElement ref={loadingRef}>
            <div className="logo">KAMA TRAVELS</div>
            <div className="spinner"></div>
          </LoadingElement>
        </SlidePanel>
      </TransitionOverlay>
      <PageWrapper ref={wrapperRef}>
        {children}
      </PageWrapper>
    </TransitionContainer>
  );
};

export default PageTransition;