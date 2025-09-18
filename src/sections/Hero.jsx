import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme, Container, Section } from '../styles/GlobalStyles';

const HeroContainer = styled(Section)`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #003580 0%, #0066cc 100%);
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    background-image: linear-gradient(rgba(0, 53, 128, 0.7), rgba(0, 102, 204, 0.7));
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity 0.8s ease-in-out;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    object-position: center center;
    transform: scale(1.1);
  }
`;

const VideoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #003580 0%, #0066cc 50%, #1a73e8 100%);
  z-index: 0;
  opacity: ${props => props.videoLoaded ? 0 : 1};
  transition: opacity 0.8s ease-in-out;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 51, 128, 0.4);
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 4.5rem;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 24px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 3.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-family: 'Caveat', 'Comic Sans MS', cursive;
  font-size: 2.3rem;
  line-height: 1.3;
  margin-bottom: 40px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  opacity: 0.95;
  font-weight: 200;
  letter-spacing: 0.3px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 18px 20px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.4);
  width: 200px;
  
  &:hover {
    background: ${theme.colors.navy};
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 102, 204, 0.6);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 18px 20px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  width: 200px;
  
  &:hover {
    background: white;
    color: ${theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  animation: bounce 2s infinite;
  cursor: pointer;
  
  .text {
    font-size: 0.9rem;
    margin-bottom: 8px;
    opacity: 0.8;
  }
  
  .arrow {
    font-size: 1.5rem;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const Hero = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonsRef = useRef();
  const videoRef = useRef();
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.fromTo(titleRef.current, 
        {
          opacity: 0,
          y: 80,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out"
        }
      )
      .fromTo(subtitleRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        },
        "-=0.6"
      )
      .fromTo(buttonsRef.current.children,
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2
        },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Handle mobile video playback issues
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoError = () => {
      console.log('Video playback failed, using fallback background');
      video.style.display = 'none';
    };

    const handleCanPlay = () => {
      // Ensure video plays smoothly on mobile
      video.play().catch(handleVideoError);
    };

    // Add event listeners for better mobile support
    video.addEventListener('error', handleVideoError);
    video.addEventListener('canplay', handleCanPlay);
    
    // Force video restart if it gets stuck
    const interval = setInterval(() => {
      if (video.paused && !video.ended) {
        video.play().catch(() => {
          // If video keeps failing, hide it
          video.style.display = 'none';
        });
      }
    }, 5000);

    return () => {
      video.removeEventListener('error', handleVideoError);
      video.removeEventListener('canplay', handleCanPlay);
      clearInterval(interval);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="hero" ref={heroRef}>
      <VideoPlaceholder videoLoaded={videoLoaded} />
      <VideoBackground 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        loaded={videoLoaded}
        onLoadedData={() => {
          setVideoLoaded(true);
        }}
        onCanPlay={() => {
          setVideoLoaded(true);
        }}
        onLoadStart={(e) => {
          // Force video to play on mobile
          const video = e.target;
          video.play().catch(() => {
            // If autoplay fails, keep the background
            console.log('Video autoplay failed, using background');
          });
        }}
        onError={() => {
          console.log('Video failed to load');
          setVideoLoaded(false);
        }}
      >
        <source src="/assets/videos/herovideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <VideoOverlay />
      
      <Container>
        <HeroContent>
          <HeroTitle ref={titleRef}>
            Escape. Discover. Repeat.
          </HeroTitle>
          <HeroSubtitle ref={subtitleRef}>
            Handcrafted journeys that feel personal, not packaged
          </HeroSubtitle>
          
          <CTAButtons ref={buttonsRef}>
            <PrimaryButton onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Planning
            </PrimaryButton>
            <SecondaryButton onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore
            </SecondaryButton>
          </CTAButtons>
        </HeroContent>
      </Container>
      
      <ScrollIndicator onClick={scrollToNext}>
        <div className="text">Scroll to explore</div>
        <div className="arrow">↓</div>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;