import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme, Container } from '../styles/GlobalStyles';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.background};
`;

const HeroSection = styled.section`
  position: relative;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%),
              url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover;
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
    background: linear-gradient(135deg, ${theme.colors.primary}40, ${theme.colors.secondary}30);
    z-index: 1;
  }
`;

const HeroTitle = styled.h1`
  position: relative;
  z-index: 2;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  position: relative;
  z-index: 2;
  font-size: 1.125rem;
  opacity: 0.9;
  max-width: 500px;
  margin: 0 auto;
`;

const FormSection = styled.section`
  padding: 80px 0;
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.xl};
  overflow: hidden;
`;

const FormHeader = styled.div`
  background: linear-gradient(135deg, ${theme.colors.lightBlue} 0%, rgba(26, 115, 232, 0.1) 100%);
  padding: 40px;
  text-align: center;
  border-bottom: 1px solid ${theme.colors.border};
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
  margin-bottom: 8px;
`;

const FormSubtitle = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 1rem;
`;

const Form = styled.form`
  padding: 40px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${theme.colors.textPrimary};
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
  }
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
  }
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

const SubmitButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  
  &:hover {
    background: ${theme.colors.navy};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
  
  &:disabled {
    background: ${theme.colors.border};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const PriceInfo = styled.div`
  background: ${theme.colors.lightBlue};
  padding: 24px;
  border-radius: ${theme.borderRadius.medium};
  margin-bottom: 32px;
  text-align: center;
`;

const PriceLabel = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 8px;
`;

const PriceAmount = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.primary};
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 16px;
  border-radius: ${theme.borderRadius.medium};
  margin-bottom: 24px;
  text-align: center;
  font-weight: 500;
`;

const BookingPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    adults: '1',
    children: '0',
    roomType: 'standard',
    specialRequests: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    // Get destination and price from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination');
    const price = urlParams.get('price');
    
    if (destination) {
      setFormData(prev => ({ ...prev, destination }));
    }

    // Animate form entrance
    const ctx = gsap.context(() => {
      gsap.fromTo('.form-animate',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    }, formRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          destination: formData.destination, // Keep destination
          departureDate: '',
          returnDate: '',
          adults: '1',
          children: '0',
          roomType: 'standard',
          specialRequests: ''
        });
      }, 3000);
    }, 2000);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const price = urlParams.get('price');

  return (
    <PageContainer>
      
      <HeroSection>
        <Container>
          <HeroTitle className="form-animate">Book Your Dream Trip</HeroTitle>
          <HeroSubtitle className="form-animate">
            Fill out the form below and we'll get back to you with the best travel package
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <FormSection ref={formRef}>
        <Container>
          <FormContainer className="form-animate">
            <FormHeader>
              <FormTitle>Travel Booking Form</FormTitle>
              <FormSubtitle>
                {formData.destination ? `Booking for ${formData.destination}` : 'Complete your booking details'}
              </FormSubtitle>
            </FormHeader>

            <Form onSubmit={handleSubmit}>
              {isSubmitted && (
                <SuccessMessage>
                  ✅ Thank you! Your booking request has been submitted successfully. 
                  We'll contact you within 24 hours with more details.
                </SuccessMessage>
              )}

              {price && (
                <PriceInfo>
                  <PriceLabel>Starting Price</PriceLabel>
                  <PriceAmount>₹{parseInt(price).toLocaleString()}</PriceAmount>
                </PriceInfo>
              )}

              <FormGrid>
                <FormGroup>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="destination">Destination *</Label>
                  <Input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder="Enter destination"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="departureDate">Departure Date *</Label>
                  <Input
                    type="date"
                    id="departureDate"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="returnDate">Return Date</Label>
                  <Input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="adults">Adults</Label>
                  <Select
                    id="adults"
                    name="adults"
                    value={formData.adults}
                    onChange={handleInputChange}
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                    <option value="5">5+ Adults</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="children">Children</Label>
                  <Select
                    id="children"
                    name="children"
                    value={formData.children}
                    onChange={handleInputChange}
                  >
                    <option value="0">No Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3">3 Children</option>
                    <option value="4">4+ Children</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="roomType">Room Type</Label>
                  <Select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                  >
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="suite">Suite</option>
                    <option value="villa">Villa</option>
                  </Select>
                </FormGroup>
              </FormGrid>

              <FormGroup>
                <Label htmlFor="specialRequests">Special Requests</Label>
                <TextArea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Any special requirements, dietary restrictions, or additional services you'd like to request..."
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </SubmitButton>
            </Form>
          </FormContainer>
        </Container>
      </FormSection>

    </PageContainer>
  );
};

export default BookingPage;