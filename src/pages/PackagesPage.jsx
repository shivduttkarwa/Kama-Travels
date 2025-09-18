import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/HeroSection';
import { theme } from '../styles/GlobalStyles';
import { packages } from '../data/packages';

gsap.registerPlugin(ScrollTrigger);

const PageContainer = styled.div`
  min-height: 100vh;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PackagesSection = styled.section`
  padding: 80px 0;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : theme.colors.textPrimary};
  border: 2px solid ${theme.colors.primary};
  padding: 12px 24px;
  border-radius: ${theme.borderRadius.medium};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const PackageCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${theme.shadows.light};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.medium};
  }
`;

const PackageImage = styled.div`
  height: 250px;
  background: ${props => `url(${props.image}) center/cover`};
  position: relative;
`;

const PackageBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: ${theme.colors.accent};
  color: white;
  padding: 6px 12px;
  border-radius: ${theme.borderRadius.medium};
  font-size: 0.875rem;
  font-weight: 600;
  z-index: 2;
`;

const PackageContent = styled.div`
  padding: 24px;
`;

const PackageTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.textPrimary};
  margin-bottom: 12px;
  font-weight: 600;
`;

const PackageLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.textSecondary};
  margin-bottom: 16px;
  font-size: 0.95rem;
  
  svg {
    width: 16px;
    height: 16px;
    fill: ${theme.colors.accent};
  }
`;

const PackagePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.primary};
`;

const PriceLabel = styled.span`
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const FeatureTag = styled.span`
  background: ${theme.colors.lightGray};
  color: ${theme.colors.textPrimary};
  padding: 4px 12px;
  border-radius: ${theme.borderRadius.small};
  font-size: 0.85rem;
  font-weight: 500;
`;

const ViewDetailsButton = styled(Link)`
  display: block;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: white;
  padding: 12px 24px;
  border-radius: ${theme.borderRadius.medium};
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.navy});
    transform: translateY(-2px);
    color: white;
  }
`;

const PackagesPage = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const [filter, setFilter] = useState('all');

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

      // Animate package cards
      gsap.fromTo('.package-card',
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
  }, [filter]);

  const filteredPackages = packages.filter(pkg => 
    filter === 'all' || pkg.category === filter
  );

  return (
    <PageContainer>
      
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
        title="Travel Packages"
        subtitle="Discover carefully curated travel packages for unforgettable experiences worldwide."
        padding="140px 0 100px"
        titleRef={titleRef}
      />

      <PackagesSection ref={sectionRef}>
        <Container>
          <FilterBar>
            <FilterButton 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              All Packages
            </FilterButton>
            <FilterButton 
              active={filter === 'india'} 
              onClick={() => setFilter('india')}
            >
              India Tours
            </FilterButton>
            <FilterButton 
              active={filter === 'international'} 
              onClick={() => setFilter('international')}
            >
              International
            </FilterButton>
          </FilterBar>

          <PackagesGrid>
            {filteredPackages.map((pkg, index) => (
              <PackageCard
                key={pkg.id}
                className="package-card"
              >
                <PackageImage image={pkg.image}>
                  <PackageBadge>{pkg.badge}</PackageBadge>
                </PackageImage>
                
                <PackageContent>
                  <PackageTitle>{pkg.title}</PackageTitle>
                  
                  <PackageLocation>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {pkg.location}
                  </PackageLocation>
                  
                  <PackagePrice>
                    <Price>{pkg.price}</Price>
                    <PriceLabel>per person</PriceLabel>
                  </PackagePrice>
                  
                  <Duration>
                    <span>📅</span>
                    {pkg.duration}
                  </Duration>
                  
                  <FeaturesList>
                    {pkg.features.slice(0, 3).map((feature, idx) => (
                      <FeatureTag key={idx}>{feature}</FeatureTag>
                    ))}
                    {pkg.features.length > 3 && (
                      <FeatureTag>+{pkg.features.length - 3} more</FeatureTag>
                    )}
                  </FeaturesList>
                  
                  <ViewDetailsButton to={`/packages/${pkg.slug}`}>
                    View Details & Book
                  </ViewDetailsButton>
                </PackageContent>
              </PackageCard>
            ))}
          </PackagesGrid>
        </Container>
      </PackagesSection>
    </PageContainer>
  );
};

export default PackagesPage;