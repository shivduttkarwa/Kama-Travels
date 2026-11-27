import { VIDEOS } from '../constants/assets';

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

return (
  <HeroContainer id="hero" ref={heroRef}>
    <VideoBackground autoPlay muted loop playsInline>
      <source src={VIDEOS.HERO.MAIN_BACKGROUND} type="video/mp4" />
      <source src={VIDEOS.HERO.FALLBACK_BACKGROUND} type="video/mp4" />
      Your browser does not support the video tag.
    </VideoBackground>
    <VideoOverlay />
    
    <Container>
      <HeroContent>
      </HeroContent>
    </Container>
  </HeroContainer>
);

