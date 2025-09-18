import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme, Container, Section, SectionTitle } from '../styles/GlobalStyles';

gsap.registerPlugin(ScrollTrigger);

const PageContainer = styled.div`
  min-height: 100vh;
  background: white;
`;

const HeroSection = styled.section`
  position: relative;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%),
              url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=800&fit=crop') center/cover;
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

const DestinationsContainer = styled(Section)`
  background: ${theme.colors.background};
  padding: 80px 0;
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
  height: 400px;
  background: white;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
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
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const DestinationName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
  margin: 0;
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
  line-height: 1.4;
  margin: 0 0 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const BookButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: ${theme.borderRadius.small};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${theme.colors.navy};
    transform: translateY(-1px);
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

const categories = ['All', 'Domestic', 'International', 'Popular', 'Adventure', 'Beach', 'Mountain'];

const destinations = [
  // Domestic Destinations (10)
  {
    id: 1,
    name: 'Goa, India',
    category: 'Domestic',
    type: 'Beach',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=300&fit=crop',
    rating: 4.6,
    price: 18999,
    description: 'Beautiful beaches, Portuguese heritage, vibrant nightlife and delicious seafood.',
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Kerala, India',
    category: 'Domestic',
    type: 'Nature',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=300&fit=crop',
    rating: 4.8,
    price: 24999,
    description: 'Gods own country with backwaters, hill stations, spice plantations and Ayurveda.',
    badge: 'Popular'
  },
  {
    id: 3,
    name: 'Rajasthan, India',
    category: 'Domestic',
    type: 'Heritage',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
    rating: 4.7,
    price: 28999,
    description: 'Royal palaces, desert safaris, rich culture and traditional Rajasthani cuisine.',
    badge: 'Popular'
  },
  {
    id: 4,
    name: 'Himachal Pradesh, India',
    category: 'Domestic',
    type: 'Mountain',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    rating: 4.5,
    price: 22999,
    description: 'Snow-capped mountains, adventure sports, hill stations and peaceful valleys.',
    badge: 'Adventure'
  },
  {
    id: 5,
    name: 'Uttarakhand, India',
    category: 'Domestic',
    type: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=300&fit=crop',
    rating: 4.6,
    price: 25999,
    description: 'Holy sites, yoga retreats, pristine nature and Himalayan treks.',
    badge: 'Popular'
  },
  {
    id: 6,
    name: 'Karnataka, India',
    category: 'Domestic',
    type: 'Diverse',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=500&h=300&fit=crop',
    rating: 4.4,
    price: 19999,
    description: 'Tech hub Bangalore, ancient temples, coffee plantations and coastal beauty.',
    badge: 'Diverse'
  },
  {
    id: 7,
    name: 'Ladakh, India',
    category: 'Domestic',
    type: 'Adventure',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=300&fit=crop',
    rating: 4.9,
    price: 35999,
    description: 'High altitude desert, Buddhist monasteries, adventure biking and stunning landscapes.',
    badge: 'Popular'
  },
  {
    id: 8,
    name: 'Tamil Nadu, India',
    category: 'Domestic',
    type: 'Cultural',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
    rating: 4.3,
    price: 17999,
    description: 'Ancient temples, classical music, traditional dance and South Indian cuisine.',
    badge: 'Cultural'
  },
  {
    id: 9,
    name: 'Andaman Islands, India',
    category: 'Domestic',
    type: 'Beach',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop',
    rating: 4.7,
    price: 32999,
    description: 'Pristine beaches, coral reefs, water sports and untouched natural beauty.',
    badge: 'Popular'
  },
  {
    id: 10,
    name: 'Northeast India',
    category: 'Domestic',
    type: 'Offbeat',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    rating: 4.8,
    price: 29999,
    description: 'Seven sisters states with unique cultures, tea gardens and pristine nature.',
    badge: 'Offbeat'
  },
  
  // International Destinations (15 - Added more popular ones)
  {
    id: 11,
    name: 'Paris, France',
    category: 'International',
    type: 'Romantic',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=300&fit=crop',
    rating: 4.8,
    price: 89999,
    description: 'City of lights with iconic landmarks, world-class museums, and romantic atmosphere.',
    badge: 'Popular'
  },
  {
    id: 12,
    name: 'Tokyo, Japan',
    category: 'International',
    type: 'Modern',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&h=300&fit=crop',
    rating: 4.9,
    price: 95999,
    description: 'Modern metropolis blending traditional culture with cutting-edge technology.',
    badge: 'Popular'
  },
  {
    id: 13,
    name: 'Santorini, Greece',
    category: 'International',
    type: 'Beach',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=300&fit=crop',
    rating: 4.9,
    price: 78999,
    description: 'Stunning sunsets, white-washed buildings, and crystal-clear Mediterranean waters.',
    badge: 'Popular'
  },
  {
    id: 14,
    name: 'Bali, Indonesia',
    category: 'International',
    type: 'Tropical',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&h=300&fit=crop',
    rating: 4.6,
    price: 42999,
    description: 'Tropical paradise with beautiful beaches, ancient temples, and lush rice terraces.',
    badge: 'Popular'
  },
  {
    id: 15,
    name: 'Swiss Alps, Switzerland',
    category: 'International',
    type: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    rating: 4.8,
    price: 135999,
    description: 'Majestic mountain peaks, pristine lakes, and world-class skiing destinations.',
    badge: 'Adventure'
  },
  {
    id: 16,
    name: 'Dubai, UAE',
    category: 'International',
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=300&fit=crop',
    rating: 4.7,
    price: 55999,
    description: 'Futuristic city with luxury shopping, stunning architecture, and desert adventures.',
    badge: 'Popular'
  },
  {
    id: 17,
    name: 'Maldives',
    category: 'International',
    type: 'Beach',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    rating: 4.9,
    price: 125999,
    description: 'Overwater bungalows, crystal-clear lagoons, and world-class diving experiences.',
    badge: 'Popular'
  },
  {
    id: 18,
    name: 'New York, USA',
    category: 'International',
    type: 'Urban',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=300&fit=crop',
    rating: 4.7,
    price: 115999,
    description: 'The city that never sleeps, featuring Broadway shows and iconic skyline.',
    badge: 'Popular'
  },
  {
    id: 19,
    name: 'Thailand',
    category: 'International',
    type: 'Cultural',
    image: 'https://images.unsplash.com/photo-1552550049-db097c9480d1?w=500&h=300&fit=crop',
    rating: 4.6,
    price: 45999,
    description: 'Golden temples, floating markets, tropical beaches and authentic Thai cuisine.',
    badge: 'Popular'
  },
  {
    id: 20,
    name: 'Singapore',
    category: 'International',
    type: 'Modern',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&h=300&fit=crop',
    rating: 4.8,
    price: 58999,
    description: 'Garden city with futuristic architecture, diverse cuisine and shopping paradise.',
    badge: 'Popular'
  },
  {
    id: 21,
    name: 'London, England',
    category: 'International',
    type: 'Historic',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=300&fit=crop',
    rating: 4.7,
    price: 105999,
    description: 'Rich history, royal palaces, world-class museums and charming British culture.',
    badge: 'Popular'
  },
  {
    id: 22,
    name: 'Rome, Italy',
    category: 'International',
    type: 'Historic',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&h=300&fit=crop',
    rating: 4.6,
    price: 82999,
    description: 'Ancient history, stunning architecture, world-famous cuisine and Vatican City.',
    badge: 'Popular'
  },
  {
    id: 23,
    name: 'Iceland',
    category: 'International',
    type: 'Adventure',
    image: 'https://images.unsplash.com/photo-1539066062733-5ad9ba40eb5e?w=500&h=300&fit=crop',
    rating: 4.9,
    price: 118999,
    description: 'Northern lights, geysers, glaciers, waterfalls and unique Nordic landscape.',
    badge: 'Popular'
  },
  {
    id: 24,
    name: 'Morocco',
    category: 'International',
    type: 'Exotic',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73dd2?w=500&h=300&fit=crop',
    rating: 4.5,
    price: 68999,
    description: 'Colorful markets, desert adventures, traditional riads and rich Berber culture.',
    badge: 'Popular'
  },
  {
    id: 25,
    name: 'Nepal',
    category: 'International',
    type: 'Adventure',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=300&fit=crop',
    rating: 4.8,
    price: 38999,
    description: 'Himalayan peaks, trekking adventures, Buddhist temples and mountain culture.',
    badge: 'Popular'
  }
];

const DestinationsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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

      // Animate cards
      gsap.fromTo('.destination-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
  }, [activeFilter]);

  const filteredDestinations = activeFilter === 'All' 
    ? destinations 
    : destinations.filter(dest => 
        dest.category === activeFilter || 
        dest.type === activeFilter ||
        (activeFilter === 'Popular' && dest.badge === 'Popular')
      );

  const handleBookNow = (destination) => {
    // Navigate to booking form
    window.location.href = `/booking?destination=${encodeURIComponent(destination.name)}&price=${destination.price}`;
  };

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle ref={titleRef}>Discover Amazing Destinations</HeroTitle>
            <HeroSubtitle>
              Explore breathtaking locations across India and beyond. Find your perfect getaway.
            </HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>

      <DestinationsContainer ref={sectionRef}>
        <Container>
          <SectionTitle>Choose Your Adventure</SectionTitle>
          
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

          <DestinationsGrid>
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} className="destination-card">
                <Badge>{destination.badge}</Badge>
                <CardImage image={destination.image} />
                <CardContent>
                  <CardHeader>
                    <DestinationName>{destination.name}</DestinationName>
                    <Rating>
                      <span className="stars">★★★★★</span>
                      <span className="score">{destination.rating}</span>
                    </Rating>
                  </CardHeader>
                  <Description>{destination.description}</Description>
                  <CardFooter>
                    <Price>
                      <div className="label">Starting from</div>
                      <div className="amount">₹{destination.price.toLocaleString()}</div>
                    </Price>
                    <BookButton onClick={() => handleBookNow(destination)}>
                      Book Now
                    </BookButton>
                  </CardFooter>
                </CardContent>
              </DestinationCard>
            ))}
          </DestinationsGrid>
        </Container>
      </DestinationsContainer>
    </PageContainer>
  );
};

export default DestinationsPage;