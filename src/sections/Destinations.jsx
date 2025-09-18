import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { theme, Container, Section, SectionTitle } from '../styles/GlobalStyles';

gsap.registerPlugin(ScrollTrigger);

const DestinationsContainer = styled(Section)`
  background: ${theme.colors.background};
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`;

const FilterTab = styled.button`
  padding: 12px 24px;
  background: ${props => props.active ? theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : theme.colors.textSecondary};
  border: 1px solid ${props => props.active ? theme.colors.primary : theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? theme.colors.navy : theme.colors.lightBlue};
    color: ${props => props.active ? 'white' : theme.colors.primary};
    border-color: ${theme.colors.primary};
  }
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
`;

const DestinationCard = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
  transition: all 0.3s ease;
  cursor: pointer;
  height: 500px;
  background: white;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 192px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  flex-shrink: 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
  }
`;

const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const DestinationInfo = styled.div`
  flex: 1;
`;

const DestinationName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
  margin: 0;
`;

const DestinationLocation = styled.p`
  font-size: 0.85rem;
  color: ${theme.colors.textSecondary};
  margin: 2px 0 0 0;
  font-weight: 400;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  
  .stars {
    color: #ffa500;
    font-size: 0.9rem;
  }
  
  .score {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${theme.colors.textSecondary};
  }
`;

const Description = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 12px 0 20px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
  min-height: 68px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #f5f5f5;
`;

const Price = styled.div`
  .label {
    font-size: 0.75rem;
    color: ${theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .amount {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${theme.colors.primary};
  }
`;

const ViewButton = styled(Link)`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: ${theme.borderRadius.small};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: ${theme.colors.navy};
    transform: translateY(-1px);
    color: white;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 48px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const ActionButton = styled(Link)`
  background: ${props => props.primary ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` : 'transparent'};
  color: ${props => props.primary ? 'white' : theme.colors.primary};
  border: ${props => props.primary ? 'none' : `2px solid ${theme.colors.primary}`};
  padding: 16px 24px;
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 56px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
    background: ${props => props.primary ? `linear-gradient(135deg, ${theme.colors.navy}, ${theme.colors.primary})` : theme.colors.primary};
    color: white;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: ${theme.colors.primary};
  color: white;
  padding: 4px 12px;
  border-radius: ${theme.borderRadius.small};
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
`;

const categories = ['All', 'Domestic', 'International'];

const destinations = [
  // 3 Domestic Destinations
  {
    id: 1,
    name: 'Kerala Backwaters',
    location: 'Alleppey • Kumarakom • Cochin',
    category: 'Domestic',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=300&fit=crop',
    rating: 4.8,
    price: 12999,
    description: 'Experience the serene beauty of Kerala\'s backwaters with luxury houseboat stays and Ayurvedic treatments.',
    badge: 'Popular',
    slug: 'kerala-backwaters'
  },
  {
    id: 2,
    name: 'Goa Beach Paradise',
    location: 'North Goa • South Goa',
    category: 'Domestic',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=300&fit=crop',
    rating: 4.6,
    price: 8999,
    description: 'Discover the tropical paradise of Goa with pristine beaches, vibrant nightlife, and Portuguese heritage.',
    badge: 'Beach',
    slug: 'goa-beach-paradise'
  },
  {
    id: 3,
    name: 'Rajasthan Royal Heritage',
    location: 'Jaipur • Udaipur • Jodhpur',
    category: 'Domestic',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&h=300&fit=crop',
    rating: 4.7,
    price: 18999,
    description: 'Journey through the royal heritage of Rajasthan with magnificent palaces and ancient forts.',
    badge: 'Heritage',
    slug: 'rajasthan-royal-heritage'
  },
  // 3 International Destinations
  {
    id: 4,
    name: 'Dubai Luxury Experience',
    location: 'Dubai • Abu Dhabi',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=300&fit=crop',
    rating: 4.7,
    price: 45999,
    description: 'Experience the epitome of luxury in Dubai with world-class shopping and stunning architecture.',
    badge: 'Luxury',
    slug: 'dubai-luxury-experience'
  },
  {
    id: 5,
    name: 'Thailand Island Hopping',
    location: 'Bangkok • Phuket • Krabi',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&h=300&fit=crop',
    rating: 4.6,
    price: 38999,
    description: 'Discover the tropical paradise of Thailand with stunning islands and vibrant culture.',
    badge: 'Beach',
    slug: 'thailand-island-hopping'
  },
  {
    id: 6,
    name: 'Singapore City Breaks',
    location: 'Singapore • Sentosa Island',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&h=300&fit=crop',
    rating: 4.8,
    price: 42999,
    description: 'Experience modern marvels of Singapore with iconic landmarks and world-class attractions.',
    badge: 'City',
    slug: 'singapore-city-breaks'
  }
];

const Destinations = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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
      gsap.fromTo(".destination-card", 
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
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

  const filteredDestinations = activeFilter === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter);

  return (
    <DestinationsContainer id="destinations" ref={sectionRef}>
      <Container>
        <SectionTitle ref={titleRef}>Popular Destinations</SectionTitle>
        
        <FilterTabs>
          {categories.map((category) => (
            <FilterTab
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterTab>
          ))}
        </FilterTabs>
        
        <DestinationsGrid ref={cardsRef}>
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} className="destination-card">
              <Badge>{destination.badge}</Badge>
              <CardImage image={destination.image} />
              <CardContent>
                <CardHeader>
                  <DestinationInfo>
                    <DestinationName>{destination.name}</DestinationName>
                    <DestinationLocation>{destination.location}</DestinationLocation>
                  </DestinationInfo>
                  <Rating>
                    <span className="stars">★★★★★</span>
                    <span className="score">{destination.rating}</span>
                  </Rating>
                </CardHeader>
                <Description>{destination.description}</Description>
                <CardFooter>
                  <Price>
                    <div className="label">From</div>
                    <div className="amount">₹{destination.price.toLocaleString()}</div>
                  </Price>
                  <ViewButton to={`/packages/${destination.slug}`}>View Details</ViewButton>
                </CardFooter>
              </CardContent>
            </DestinationCard>
          ))}
        </DestinationsGrid>
        
        <ActionButtonsContainer>
          <ActionButton to="/destinations">View More Destinations</ActionButton>
          <ActionButton to="/packages" primary>View All Packages</ActionButton>
        </ActionButtonsContainer>
      </Container>
    </DestinationsContainer>
  );
};

export default Destinations;