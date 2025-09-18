import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme, Container, Section } from '../styles/GlobalStyles';

const TestimonialsSection = styled(Section)`
  background: white;
  padding: 100px 0;
`;

const TestimonialTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  color: ${theme.colors.textPrimary};
  line-height: 1.2;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
    margin-bottom: 32px;
  }
`;

const SliderContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const TestimonialSlider = styled.div`
  position: relative;
  overflow: hidden;
`;

const TestimonialSlide = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  animation: ${props => props.active ? 'fadeIn 1s ease-in-out' : 'none'};
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Quote = styled.div`
  color: ${theme.colors.textPrimary};
`;

const Blockquote = styled.blockquote`
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 0 20px 0;
  font-style: italic;
  position: relative;
  padding-top: 30px;
  
  &::before {
    content: '"';
    font-size: 3rem;
    color: ${theme.colors.primary};
    position: absolute;
    left: 0;
    top: -10px;
    line-height: 1;
  }
  
  p {
    margin: 0;
    position: relative;
    z-index: 1;
  }
`;

const Cite = styled.cite`
  font-style: normal;
  display: block;
  
  span {
    font-weight: 600;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 5px;
    color: ${theme.colors.textPrimary};
  }
  
  br + span {
    font-weight: 400;
    font-size: 0.9rem;
    color: ${theme.colors.textSecondary};
  }
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

const SliderButton = styled.button`
  background: ${theme.colors.lightBlue};
  border: 2px solid ${theme.colors.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.primary};
    border-color: ${theme.colors.navy};
    transform: scale(1.1);
    
    svg {
      fill: white;
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
    }
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: ${theme.colors.primary};
    transition: fill 0.3s ease;
  }
`;

const SliderDots = styled.div`
  display: flex;
  gap: 10px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.border};
  background: ${props => props.active ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${theme.colors.primary};
    transform: scale(1.2);
  }
`;

const testimonialData = [
  {
    id: 1,
    text: "Kama Travels made our Kerala honeymoon absolutely magical! The houseboat experience in Alleppey and the spice plantation tours were perfectly organized. Every detail was taken care of.",
    author: "Priya & Arjun Sharma",
    position: "Newlyweds",
    location: "Kerala Backwaters"
  },
  {
    id: 2,
    text: "Our Golden Triangle tour exceeded all expectations. The heritage walks in Delhi, sunrise at Taj Mahal, and royal palaces in Jaipur were breathtaking. Excellent guides and comfortable accommodations.",
    author: "Rajesh Kumar",
    position: "History Enthusiast",
    location: "Delhi - Agra - Jaipur"
  },
  {
    id: 3,
    text: "The Rajasthan heritage tour was a dream come true. From the lakes of Udaipur to the desert camps in Jaisalmer, every moment was unforgettable. Professional service throughout our journey.",
    author: "Meera Gupta",
    position: "Cultural Explorer",
    location: "Rajasthan Heritage Circuit"
  },
  {
    id: 4,
    text: "Our Himachal adventure was perfectly planned. Trekking in Manali, paragliding in Bir Billing, and the scenic drives through mountain passes were incredible. Highly recommend Kama Travels!",
    author: "Vikram Singh",
    position: "Adventure Seeker",
    location: "Himachal Pradesh"
  },
  {
    id: 5,
    text: "The South India temple tour was spiritually enriching. From Madurai's Meenakshi Temple to Tirupati's sacred hills, the cultural insights and smooth logistics made this trip memorable.",
    author: "Lakshmi Iyer",
    position: "Spiritual Traveler",
    location: "Tamil Nadu - Andhra Pradesh"
  },
  {
    id: 6,
    text: "Goa was the perfect family vacation destination. Beach resorts, water sports, and local cuisine experiences were all wonderfully arranged. Our kids had the time of their lives!",
    author: "The Malhotra Family",
    position: "Family Travelers",
    location: "Goa Beaches"
  },
  {
    id: 7,
    text: "The Northeast India expedition opened our eyes to incredible biodiversity. Kaziranga's rhinos, Meghalaya's living bridges, and Arunachal's monasteries - simply extraordinary!",
    author: "Dr. Ankit Bhattacharya",
    position: "Wildlife Photographer",
    location: "Northeast India"
  },
  {
    id: 8,
    text: "Our Gujarat heritage and culture tour was fascinating. From the Rann of Kutch to Somnath Temple, and the architectural marvels of Ahmedabad - every day brought new discoveries.",
    author: "Kavita Patel",
    position: "Architecture Lover",
    location: "Gujarat Cultural Circuit"
  },
  {
    id: 9,
    text: "The Karnataka temple and palace tour was incredible. Hampi's ruins, Mysore Palace's grandeur, and Coorg's coffee plantations created perfect memories. Excellent planning by Kama Travels.",
    author: "Suresh Reddy",
    position: "Heritage Enthusiast",
    location: "Karnataka Golden Triangle"
  },
  {
    id: 10,
    text: "Our Mumbai to Pune weekend getaway was perfectly organized. From Bollywood studios to hill stations in Lonavala, every detail was thoughtfully planned. Great value for money!",
    author: "Neha Joshi",
    position: "Weekend Explorer",
    location: "Maharashtra"
  },
  {
    id: 11,
    text: "The Uttarakhand spiritual journey was life-changing. Rishikesh ashrams, Haridwar Ganga Aarti, and the trek to Kedarnath were spiritually uplifting experiences.",
    author: "Pandit Ramesh Tiwari",
    position: "Spiritual Guide",
    location: "Uttarakhand Char Dham"
  },
  {
    id: 12,
    text: "Exploring Odisha's art and culture was amazing. Konark Sun Temple, Puri's beaches, and the tribal villages tour gave us deep insights into India's rich heritage.",
    author: "Anjali Das",
    position: "Cultural Researcher",
    location: "Odisha Cultural Trail"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(nextSlide, 4000);
      return () => clearInterval(intervalRef.current);
    }
  }, [isAutoPlay]);

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <TestimonialTitle>What Our Travelers Say</TestimonialTitle>
        <SliderContainer
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <TestimonialSlider>
            {testimonialData.map((testimonial, index) => (
              <TestimonialSlide key={testimonial.id} active={index === currentSlide}>
                <QuoteContainer>
                  <Quote>
                    <Blockquote>
                      <p>{testimonial.text}</p>
                    </Blockquote>
                    <Cite>
                      <span>{testimonial.author}</span>
                      <br />
                      <span>{testimonial.position}</span>
                      <br />
                      <span>{testimonial.location}</span>
                    </Cite>
                  </Quote>
                </QuoteContainer>
              </TestimonialSlide>
            ))}
          </TestimonialSlider>
          
          <SliderControls>
            <SliderButton onClick={prevSlide} aria-label="Previous testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16,16.46 11.415,11.875 16,7.29 14.585,5.875 l -6,6 6,6 z" />
              </svg>
            </SliderButton>
            
            <SliderDots>
              {testimonialData.map((_, index) => (
                <Dot
                  key={index}
                  active={index === currentSlide}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </SliderDots>
            
            <SliderButton onClick={nextSlide} aria-label="Next testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8.585 16.46l4.585-4.585-4.585-4.585 1.415-1.415 6 6-6 6z" />
              </svg>
            </SliderButton>
          </SliderControls>
        </SliderContainer>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
