import React, { useRef, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme } from '../styles/GlobalStyles';
import { packages } from '../data/packages';

gsap.registerPlugin(ScrollTrigger);

const PageContainer = styled.div`
  min-height: 100vh;
  background: white;
`;

const HeroSection = styled.section`
  padding: 140px 0 100px;
  background: ${props => props.bgImage ? `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url(${props.bgImage})` : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  
  @media (max-width: 768px) {
    min-height: 60vh;
    height: auto;
    padding: 20px 0;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 120px 20px 0;
  }
  
  @media (min-width: 769px) {
    padding: 140px 20px 0;
  }
`;

const BackButton = styled(Link)`
  position: fixed;
  top: 90px;
  left: 20px;
  background: #007aff;
  backdrop-filter: blur(10px);
  padding: 12px 20px;
  border-radius: ${theme.borderRadius.medium};
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    background: #0066cc;
    transform: translateX(-5px);
  }
  
  @media (max-width: 768px) {
    top: 80px;
    left: 10px;
    padding: 8px 16px;
    font-size: 0.9rem;
    border-radius: ${theme.borderRadius.small};
  }
`;

const PackageTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 16px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 12px;
    margin-top: 20px;
  }
`;

const PackageLocation = styled.p`
  font-size: 1.5rem;
  margin-bottom: 24px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PackageMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: ${theme.borderRadius.medium};
`;

const Price = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.accent};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContentSection = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.textPrimary};
  margin-bottom: 40px;
  text-align: center;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const MainContent = styled.div``;

const Sidebar = styled.div``;

const DescriptionBox = styled.div`
  background: #f8f9fa;
  padding: 32px;
  border-radius: ${theme.borderRadius.large};
  margin-bottom: 40px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.colors.textPrimary};
`;

const ItineraryBox = styled.div`
  margin-bottom: 40px;
`;

const ItineraryTitle = styled.h3`
  font-size: 1.8rem;
  color: ${theme.colors.textPrimary};
  margin-bottom: 24px;
`;

const ItineraryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ItineraryItem = styled.li`
  background: white;
  padding: 20px;
  margin-bottom: 12px;
  border-radius: ${theme.borderRadius.medium};
  border-left: 4px solid ${theme.colors.primary};
  box-shadow: ${theme.shadows.light};
  font-size: 1rem;
  line-height: 1.6;
`;

const InclusionBox = styled.div`
  background: white;
  padding: 32px;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.light};
  margin-bottom: 24px;
`;

const InclusionTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.textPrimary};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InclusionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const InclusionItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const InclusionIcon = styled.span`
  color: ${props => props.excluded ? '#e74c3c' : '#27ae60'};
  font-weight: bold;
`;

const BookingCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
  position: sticky;
  top: 140px;
  
  @media (max-width: 968px) {
    position: static;
  }
`;

const PriceDisplay = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const PriceAmount = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 8px;
`;

const PriceLabel = styled.div`
  color: ${theme.colors.textSecondary};
  font-size: 1rem;
`;

const FeaturesList = styled.div`
  margin-bottom: 32px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  color: ${theme.colors.textPrimary};
`;

const FeatureIcon = styled.span`
  color: ${theme.colors.primary};
  font-weight: bold;
`;

const BookButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: ${theme.borderRadius.medium};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 16px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  background: transparent;
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  padding: 16px 24px;
  border-radius: ${theme.borderRadius.medium};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.primary};
    color: white;
  }
`;

const PackageDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef();

  // Find package by slug
  const packageData = packages.find(pkg => pkg.slug === slug);

  // Force scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  useEffect(() => {
    // Ensure page starts at the very top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    if (!packageData) {
      navigate('/packages');
      return;
    }

    // Animate content with a slight delay to ensure scroll reset
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.fade-in',
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.3
          }
        );
      }, contentRef);
      
      return () => ctx.revert();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [packageData, navigate]);

  if (!packageData) {
    return null;
  }

  const handleBookNow = () => {
    navigate(`/booking?package=${packageData.id}`);
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <PageContainer ref={contentRef}>
      <HeroSection bgImage={packageData.image}>
        <BackButton to="/packages">
          ← Back to Packages
        </BackButton>
        
        <HeroContent className="fade-in">
          <PackageTitle>{packageData.title}</PackageTitle>
          <PackageLocation>{packageData.location}</PackageLocation>
          
          <PackageMeta>
            <MetaItem>
              <span>📅</span>
              {packageData.duration}
            </MetaItem>
            <MetaItem>
              <span>🏷️</span>
              {packageData.badge}
            </MetaItem>
            <MetaItem>
              <Price>{packageData.price}</Price>
              <span>per person</span>
            </MetaItem>
          </PackageMeta>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <ContentGrid>
            <MainContent>
              <DescriptionBox className="fade-in">
                <Description>{packageData.description}</Description>
              </DescriptionBox>

              <ItineraryBox className="fade-in">
                <ItineraryTitle>Detailed Itinerary</ItineraryTitle>
                <ItineraryList>
                  {packageData.itinerary.map((item, index) => (
                    <ItineraryItem key={index}>
                      {item}
                    </ItineraryItem>
                  ))}
                </ItineraryList>
              </ItineraryBox>

              <div className="fade-in">
                <InclusionBox>
                  <InclusionTitle>
                    <span>✅</span>
                    What's Included
                  </InclusionTitle>
                  <InclusionList>
                    {packageData.inclusions.map((item, index) => (
                      <InclusionItem key={index}>
                        <InclusionIcon>✓</InclusionIcon>
                        {item}
                      </InclusionItem>
                    ))}
                  </InclusionList>
                </InclusionBox>

                <InclusionBox>
                  <InclusionTitle>
                    <span>❌</span>
                    What's Not Included
                  </InclusionTitle>
                  <InclusionList>
                    {packageData.exclusions.map((item, index) => (
                      <InclusionItem key={index}>
                        <InclusionIcon excluded>✗</InclusionIcon>
                        {item}
                      </InclusionItem>
                    ))}
                  </InclusionList>
                </InclusionBox>
              </div>
            </MainContent>

            <Sidebar>
              <BookingCard className="fade-in">
                <PriceDisplay>
                  <PriceAmount>{packageData.price}</PriceAmount>
                  <PriceLabel>per person</PriceLabel>
                </PriceDisplay>

                <FeaturesList>
                  {packageData.features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <FeatureIcon>✓</FeatureIcon>
                      {feature}
                    </FeatureItem>
                  ))}
                </FeaturesList>

                <BookButton onClick={handleBookNow}>
                  Book This Package
                </BookButton>
                
                <ContactButton onClick={handleContact}>
                  Contact Us
                </ContactButton>
              </BookingCard>
            </Sidebar>
          </ContentGrid>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default PackageDetailPage;