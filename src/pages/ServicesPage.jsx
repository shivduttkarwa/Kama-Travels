import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme, Container, Section, SectionTitle } from '../styles/GlobalStyles';
import HeroSection from '../components/HeroSection';

gsap.registerPlugin(ScrollTrigger);

const PageContainer = styled.div`
  min-height: 100vh;
  background: white;
`;

const ServicesSection = styled.section`
  padding: 100px 0;
  background: ${theme.colors.background};
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  text-align: center;
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 60px;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.large};
  padding: 40px 32px;
  text-align: center;
  box-shadow: ${theme.shadows.medium};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.primary};
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.lightBlue};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 2rem;
  transition: all 0.3s ease;
  
  ${ServiceCard}:hover & {
    background: ${theme.colors.primary};
    transform: scale(1.1);
    
    svg {
      stroke: white;
    }
  }
  
  svg {
    width: 40px;
    height: 40px;
    stroke: ${theme.colors.primary};
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: all 0.3s ease;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${theme.colors.textPrimary};
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 24px;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  
  li {
    padding: 8px 0;
    color: ${theme.colors.textSecondary};
    position: relative;
    padding-left: 24px;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: ${theme.colors.primary};
      font-weight: bold;
    }
  }
`;

const CtaSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const CtaDescription = styled.p`
  font-size: 1.125rem;
  opacity: 0.9;
  margin-bottom: 32px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const CtaButton = styled.button`
  background: white;
  color: ${theme.colors.primary};
  border: none;
  padding: 16px 32px;
  border-radius: ${theme.borderRadius.medium};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.lightBlue};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
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
    features: [
      'Compare prices across airlines',
      'Flexible date options',
      '24/7 customer support',
      'Instant booking confirmation',
      'Mobile boarding passes'
    ]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21h18V10H3v11z"></path>
        <path d="M6 21V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v14"></path>
        <circle cx="12" cy="14" r="2"></circle>
      </svg>
    ),
    title: 'Hotels & Accommodation',
    description: 'Discover and reserve accommodations worldwide, from luxury resorts to budget-friendly options.',
    features: [
      'Verified guest reviews',
      'Best price guarantee',
      'Free cancellation options',
      'Instant confirmation',
      'Special member rates'
    ]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
        <path d="M8 14h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 18h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M16 18h.01"></path>
      </svg>
    ),
    title: 'Trip Planning',
    description: 'Let our expert travel consultants create personalized itineraries for your perfect vacation.',
    features: [
      'Custom itinerary design',
      'Local expert recommendations',
      'Activity bookings',
      'Restaurant reservations',
      'Transportation arrangements'
    ]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="m2 17 10 5 10-5"></path>
        <path d="m2 12 10 5 10-5"></path>
      </svg>
    ),
    title: 'Travel Insurance',
    description: 'Protect your investment with comprehensive travel insurance coverage for peace of mind.',
    features: [
      'Medical emergency coverage',
      'Trip cancellation protection',
      'Lost luggage compensation',
      'Flight delay coverage',
      '24/7 emergency assistance'
    ]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
      </svg>
    ),
    title: '24/7 Support',
    description: 'Round-the-clock customer service to assist you before, during, and after your travels.',
    features: [
      'Live chat support',
      'Phone assistance',
      'Email support',
      'Emergency hotline',
      'Multi-language support'
    ]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: 'Group Travel',
    description: 'Special packages and coordination services for group bookings, corporate trips, and events.',
    features: [
      'Group discounts',
      'Dedicated coordinator',
      'Flexible payment options',
      'Custom group activities',
      'Corporate travel management'
    ]
  }
];

const ServicesPage = () => {
  const sectionRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Animate service cards
      gsap.fromTo('.service-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  return (
    <PageContainer>
      
      <HeroSection
        backgroundImage="/assets/images/serviceshero.jpg"
        title="Our Travel Services"
        subtitle="Comprehensive travel solutions for seamless and unforgettable journeys."
        animatedPattern={true}
        padding="140px 0 100px"
        titleRef={titleRef}
      />

      <ServicesSection ref={sectionRef}>
        <Container>
          <SectionTitle>Everything You Need for Perfect Travel</SectionTitle>
          <SectionSubtitle>
            From planning to booking to support, we provide end-to-end travel services 
            to ensure your trip exceeds expectations.
          </SectionSubtitle>
          
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index} className="service-card">
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ServiceFeatures>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <CtaSection>
        <Container>
          <CtaTitle>Ready to Start Your Journey?</CtaTitle>
          <CtaDescription>
            Let our travel experts help you plan the perfect trip. 
            Get in touch today for personalized service.
          </CtaDescription>
          <CtaButton onClick={handleContactUs}>
            Contact Our Travel Experts
          </CtaButton>
        </Container>
      </CtaSection>
    </PageContainer>
  );
};

export default ServicesPage;