import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { theme, Container, Section, SectionTitle } from '../styles/GlobalStyles';

gsap.registerPlugin(ScrollTrigger);

const ServicesContainer = styled(Section)`
  background: white;
`;

const ServicesIntro = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 64px;
  
  p {
    font-size: 1.125rem;
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-bottom: 64px;
`;

const ServiceCard = styled.div`
  background: white;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.large};
  padding: 32px 24px;
  text-align: center;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.medium};
    border-color: ${theme.colors.primary};
  }
`;

const ServiceIcon = styled.div`
  width: 64px;
  height: 64px;
  background: ${theme.colors.lightBlue};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 1.75rem;
  transition: all 0.2s ease;
  
  ${ServiceCard}:hover & {
    background: ${theme.colors.primary};
    transform: scale(1.05);
    
    svg {
      stroke: white;
    }
  }
  
  svg {
    width: 32px;
    height: 32px;
    stroke: ${theme.colors.primary};
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: all 0.2s ease;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${theme.colors.textPrimary};
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const ServiceCTA = styled(Link)`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 auto;
  text-decoration: none;
  
  &:hover {
    color: ${theme.colors.navy};
    transform: translateX(4px);
  }
  
  &:after {
    content: '→';
    transition: transform 0.2s ease;
  }
  
  &:hover:after {
    transform: translateX(2px);
  }
`;

const FeaturesSection = styled.div`
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.large};
  padding: 48px 32px;
  margin-top: 64px;
`;

const FeaturesTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;
  color: ${theme.colors.textPrimary};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
`;

const FeatureItem = styled.div`
  text-align: center;
  
  svg {
    width: 32px;
    height: 32px;
    stroke: ${theme.colors.primary};
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    margin-bottom: 16px;
  }
  
  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${theme.colors.textPrimary};
  }
  
  p {
    font-size: 0.875rem;
    color: ${theme.colors.textSecondary};
    line-height: 1.4;
  }
`;

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="7.5,4.21 12,6.81 16.5,4.21"></polyline>
        <polyline points="7.5,19.79 7.5,14.6 3,12"></polyline>
        <polyline points="21,12 16.5,14.6 16.5,19.79"></polyline>
      </svg>
    ),
    title: 'Flight Booking',
    description: 'Find and book the best deals on domestic and international flights with our advanced search technology.',
    cta: 'Search Flights'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21h18V10H3v11z"></path>
        <path d="M6 21V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v14"></path>
        <circle cx="12" cy="14" r="2"></circle>
      </svg>
    ),
    title: 'Hotels & Stays',
    description: 'Discover and reserve accommodations worldwide, from luxury resorts to budget-friendly options.',
    cta: 'Find Hotels'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 1v6m0 6v6"></path>
        <path d="m15.14 8.86-4.28 4.28"></path>
        <path d="m9.86 15.14 4.28-4.28"></path>
        <path d="m21 12-6 0"></path>
        <path d="m9 12-6 0"></path>
      </svg>
    ),
    title: 'Car Rentals',
    description: 'Rent cars from trusted providers with competitive rates and flexible pickup locations.',
    cta: 'Rent a Car'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <path d="m9 16 2 2 4-4"></path>
      </svg>
    ),
    title: 'Travel Packages',
    description: 'Save more with our curated vacation packages combining flights, hotels, and activities.',
    cta: 'View Packages'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    title: 'Travel Insurance',
    description: 'Protect your trip with comprehensive travel insurance coverage for peace of mind.',
    cta: 'Get Coverage'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14,2 14,8 20,8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10,9 9,9 8,9"></polyline>
      </svg>
    ),
    title: 'Visa Assistance',
    description: 'Get expert help with visa applications and documentation for hassle-free travel.',
    cta: 'Get Visa Help'
  }
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    title: 'Best Price Guarantee',
    description: 'Find a lower price and we\'ll match it'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <circle cx="12" cy="16" r="1"></circle>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    title: 'Secure Booking',
    description: 'Your data is protected with bank-level security'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    title: '24/7 Support',
    description: 'Get help anytime, anywhere from our experts'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
      </svg>
    ),
    title: 'Instant Confirmation',
    description: 'Get immediate booking confirmations'
  }
];

const Services = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const cardsRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards animation
      gsap.fromTo(".service-card", 
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <ServicesContainer id="services" ref={sectionRef}>
      <Container>
        <SectionTitle ref={titleRef}>Our Services</SectionTitle>
        
        <ServicesIntro>
          <p>
            Everything you need to plan and book your perfect trip, all in one place. 
            From flights and hotels to cars and travel insurance, we've got you covered.
          </p>
        </ServicesIntro>
        
        <ServicesGrid ref={cardsRef}>
          {services.map((service, index) => (
            <ServiceCard key={index} className="service-card">
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceCTA to="/contact">{service.cta}</ServiceCTA>
            </ServiceCard>
          ))}
        </ServicesGrid>
        
        <FeaturesSection>
          <FeaturesTitle>Why Choose Kama Travels?</FeaturesTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                {feature.icon}
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </FeatureItem>
            ))}
          </FeaturesGrid>
        </FeaturesSection>
      </Container>
    </ServicesContainer>
  );
};

export default Services;