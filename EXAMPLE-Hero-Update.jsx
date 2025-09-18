// Example: How to update Hero.jsx to use local video

// 1. Import the assets constants
import { VIDEOS } from '../constants/assets';

// 2. Update the VideoBackground component in Hero.jsx
const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

// 3. Use local video in the component
return (
  <HeroContainer id="hero" ref={heroRef}>
    <VideoBackground autoPlay muted loop playsInline>
      {/* Primary video source */}
      <source src={VIDEOS.HERO.MAIN_BACKGROUND} type="video/mp4" />
      {/* Fallback compressed video for slower connections */}
      <source src={VIDEOS.HERO.FALLBACK_BACKGROUND} type="video/mp4" />
      {/* Fallback text for browsers that don't support video */}
      Your browser does not support the video tag.
    </VideoBackground>
    <VideoOverlay />
    
    <Container>
      <HeroContent>
        {/* Rest of your hero content */}
      </HeroContent>
    </Container>
  </HeroContainer>
);

// Alternative: Direct path usage (without constants)
// <source src="/assets/videos/hero-travel.mp4" type="video/mp4" />