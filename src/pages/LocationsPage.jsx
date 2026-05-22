import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme, Container } from '../styles/GlobalStyles';

const BASE = import.meta.env.BASE_URL;

gsap.registerPlugin(ScrollTrigger);

const PageContainer = styled.div`
  min-height: 100vh;
  background: white;
`;

const HeroSection = styled.section`
  position: relative;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%),
              url('${BASE}assets/images/destinationhero.jpg') center/cover;
  color: white;
  padding: 140px 0 100px;
  text-align: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="1"/></g></svg>') repeat;
    animation: backgroundMove 20s linear infinite;
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

const ContentSection = styled.section`
  padding: 80px 0;
  background: ${theme.colors.background};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  color: ${theme.colors.text};
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
`;

const LocationBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: ${theme.colors.primary};
  }
  
  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.colors.text};
    margin: 0;
    line-height: 1.4;
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    
    h3 {
      font-size: 0.9rem;
    }
  }
`;

const LocationsPage = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const indianLocationsRef = useRef();
  const internationalLocationsRef = useRef();

  // Indian destinations
  const indianDestinations = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad",
    "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
    "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
    "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar",
    "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad",
    "Howrah", "Ranchi", "Gwalior", "Jabalpur", "Coimbatore", "Vijayawada", "Jodhpur",
    "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubballi-Dharwad"
  ];

  // International destinations
  const internationalDestinations = [
    "Paris", "London", "New York", "Tokyo", "Dubai", "Singapore", "Barcelona", "Rome",
    "Amsterdam", "Bangkok", "Istanbul", "Sydney", "Los Angeles", "Berlin", "Vienna",
    "Prague", "Budapest", "Zurich", "Stockholm", "Copenhagen", "Helsinki", "Oslo",
    "Edinburgh", "Dublin", "Lisbon", "Madrid", "Florence", "Venice", "Milan", "Naples",
    "Athens", "Santorini", "Mykonos", "Cairo", "Marrakech", "Cape Town", "Casablanca",
    "Bali", "Phuket", "Kuala Lumpur", "Ho Chi Minh City", "Hanoi", "Seoul", "Hong Kong",
    "Macau", "Shanghai", "Beijing", "Toronto", "Vancouver", "Montreal", "San Francisco"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );
      
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.7 }
      );

      // Location boxes animations
      gsap.fromTo(".location-box", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".locations-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageContainer ref={heroRef}>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle ref={titleRef}>
              Our Locations
            </HeroTitle>
            <HeroSubtitle ref={subtitleRef}>
              Discover amazing destinations across India and around the world
            </HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container className="locations-container">
          <SectionTitle ref={indianLocationsRef}>
            Indian Destinations
          </SectionTitle>
          <LocationsGrid>
            {indianDestinations.map((location, index) => (
              <LocationBox 
                key={index} 
                className="location-box"
                onClick={() => console.log(`Selected: ${location}`)}
              >
                <h3>{location}</h3>
              </LocationBox>
            ))}
          </LocationsGrid>

          <SectionTitle ref={internationalLocationsRef}>
            International Destinations
          </SectionTitle>
          <LocationsGrid>
            {internationalDestinations.map((location, index) => (
              <LocationBox 
                key={index} 
                className="location-box"
                onClick={() => console.log(`Selected: ${location}`)}
              >
                <h3>{location}</h3>
              </LocationBox>
            ))}
          </LocationsGrid>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default LocationsPage;