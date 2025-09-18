import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme, Container } from '../styles/GlobalStyles';

gsap.registerPlugin(ScrollTrigger);

const PageContainer = styled.div`
  min-height: 100vh;
  background: white;
`;

const HeroSection = styled.section`
  position: relative;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%),
              url('/assets/images/contacthero.jpg') center/cover;
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
    background: linear-gradient(135deg, ${theme.colors.secondary}30, ${theme.colors.primary}20);
    z-index: 1;
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

const ContactSection = styled.section`
  padding: 100px 0;
  background: ${theme.colors.background};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: ${theme.colors.textPrimary};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  text-align: center;
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 80px;
  line-height: 1.6;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 40px;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${theme.colors.textPrimary};
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${theme.colors.textPrimary};
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(47, 128, 237, 0.1);
  }
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(47, 128, 237, 0.1);
  }
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(47, 128, 237, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: ${theme.borderRadius.medium};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
  
  &:disabled {
    background: ${theme.colors.textSecondary};
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 40px;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
  height: fit-content;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${theme.colors.textPrimary};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
  padding: 20px;
  border-radius: ${theme.borderRadius.medium};
  background: ${theme.colors.background};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.lightBlue};
    transform: translateY(-2px);
  }
`;

const InfoIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    stroke: white;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h4`
  font-weight: 600;
  margin-bottom: 4px;
  color: ${theme.colors.textPrimary};
`;

const InfoValue = styled.p`
  color: ${theme.colors.textSecondary};
  margin: 0;
  line-height: 1.5;
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 16px;
  border-radius: ${theme.borderRadius.medium};
  margin-bottom: 24px;
  border: 1px solid #c3e6cb;
  text-align: center;
`;

const ContactPage = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

      // Animate contact sections
      gsap.fromTo('.contact-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <PageContainer>
      
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle ref={titleRef}>Get in Touch</HeroTitle>
            <HeroSubtitle>
              Ready for your next adventure? Our travel experts are here to help you plan the perfect journey.
            </HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>

      <ContactSection ref={sectionRef}>
        <Container>
          <SectionTitle>Contact Our Travel Experts</SectionTitle>
          <SectionSubtitle>
            Have questions about our services or need help planning your trip? 
            We're here to assist you every step of the way.
          </SectionSubtitle>
          
          <ContactContent>
            <ContactForm className="contact-item" onSubmit={handleSubmit}>
              <FormTitle>Send us a Message</FormTitle>
              
              {isSubmitted && (
                <SuccessMessage>
                  Thank you for your message! We'll get back to you within 24 hours.
                </SuccessMessage>
              )}
              
              <FormGroup>
                <FormLabel htmlFor="name">Full Name *</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email Address *</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormInput
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject *</FormLabel>
                <FormSelect
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="flight-booking">Flight Booking</option>
                  <option value="hotel-reservation">Hotel Reservation</option>
                  <option value="trip-planning">Trip Planning</option>
                  <option value="travel-insurance">Travel Insurance</option>
                  <option value="group-travel">Group Travel</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="other">Other</option>
                </FormSelect>
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message *</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your travel plans or ask any questions..."
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </SubmitButton>
            </ContactForm>
            
            <ContactInfo className="contact-item">
              <InfoTitle>Contact Information</InfoTitle>
              
              <InfoItem>
                <InfoIcon>
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </InfoIcon>
                <InfoContent>
                  <InfoLabel>Phone</InfoLabel>
                  <InfoValue>+91 98765 43210</InfoValue>
                  <InfoValue>+91 87654 32109</InfoValue>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </InfoIcon>
                <InfoContent>
                  <InfoLabel>Email</InfoLabel>
                  <InfoValue>info@kamatravels.com</InfoValue>
                  <InfoValue>support@kamatravels.com</InfoValue>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </InfoIcon>
                <InfoContent>
                  <InfoLabel>Office Address</InfoLabel>
                  <InfoValue>
                    123 Travel Street,<br />
                    Tourism District,<br />
                    Mumbai, Maharashtra 400001
                  </InfoValue>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </InfoIcon>
                <InfoContent>
                  <InfoLabel>Business Hours</InfoLabel>
                  <InfoValue>
                    Monday - Friday: 9:00 AM - 8:00 PM<br />
                    Saturday: 10:00 AM - 6:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </InfoValue>
                </InfoContent>
              </InfoItem>
            </ContactInfo>
          </ContactContent>
        </Container>
      </ContactSection>
    </PageContainer>
  );
};

export default ContactPage;