import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme, Container, Section } from '../styles/GlobalStyles';

gsap.registerPlugin(ScrollTrigger);

const ContactContainer = styled(Section)`
  background: #fafbfc;
  position: relative;
  overflow: hidden;
  padding: 100px 0;
`;

const ContactContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-family: ${theme.fonts.heading};
    font-size: 2.5rem;
    color: ${theme.colors.textDark};
    margin-bottom: 20px;
    font-weight: 300;
    letter-spacing: -0.5px;
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 2.2rem;
    }
  }
  
  .description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${theme.colors.gray};
    margin-bottom: 50px;
    font-weight: 400;
  }
`;

const ContactMethods = styled.div`
  display: grid;
  gap: 30px;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  
  .icon {
    width: 24px;
    height: 24px;
    margin-top: 4px;
    flex-shrink: 0;
    
    svg {
      width: 100%;
      height: 100%;
      fill: ${theme.colors.primary};
    }
  }
  
  .info {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 8px;
      color: ${theme.colors.textDark};
      font-weight: 600;
    }
    
    p {
      color: ${theme.colors.gray};
      margin: 0;
      font-size: 1rem;
      line-height: 1.6;
    }
    
    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      font-weight: 500;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ContactForm = styled.form`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 102, 204, 0.08);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${theme.colors.textDark};
    font-weight: 600;
  }
  
  .form-subtitle {
    color: ${theme.colors.gray};
    margin-bottom: 30px;
    font-size: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
    color: ${theme.colors.textDark};
    font-size: 0.95rem;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 14px 16px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    color: ${theme.colors.textDark};
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: ${theme.fonts.body};
    
    &::placeholder {
      color: ${theme.colors.gray};
    }
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
      background: white;
      box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }
  }
  
  textarea {
    resize: vertical;
    height: 100px;
    line-height: 1.6;
  }
  
  select {
    cursor: pointer;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 102, 204, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Simple SVG Icons
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(section,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactContainer id="contact" ref={sectionRef}>
      <Container>
        <ContactContent>
          <ContactInfo>
            <h2>Let's Plan Your Journey</h2>
            <p className="description">
              Ready to explore incredible destinations? Get in touch with our travel experts 
              and let's create your perfect adventure together.
            </p>

            <ContactMethods>
              <ContactMethod>
                <div className="icon">
                  <PhoneIcon />
                </div>
                <div className="info">
                  <h4>Call Us</h4>
                  <p>Speak with our travel consultants</p>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </ContactMethod>

              <ContactMethod>
                <div className="icon">
                  <EmailIcon />
                </div>
                <div className="info">
                  <h4>Email Us</h4>
                  <p>Send us your travel inquiries</p>
                  <a href="mailto:info@kamatravels.com">info@kamatravels.com</a>
                </div>
              </ContactMethod>

              <ContactMethod>
                <div className="icon">
                  <LocationIcon />
                </div>
                <div className="info">
                  <h4>Visit Our Office</h4>
                  <p>Meet us in person for detailed planning</p>
                  <p>123 Travel Plaza, Connaught Place<br />New Delhi, India 110001</p>
                </div>
              </ContactMethod>
            </ContactMethods>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <h3>Send us a Message</h3>
            <p className="form-subtitle">Share your travel dreams and we'll make them reality.</p>

            <FormRow>
              <FormGroup>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select inquiry type</option>
                  <option value="rajasthan-tour">Rajasthan Heritage Tour</option>
                  <option value="golden-triangle">Golden Triangle Package</option>
                  <option value="honeymoon">Honeymoon Package</option>
                  <option value="family-trip">Family Vacation</option>
                  <option value="corporate">Corporate Travel</option>
                  <option value="custom">Custom Itinerary</option>
                  <option value="other">Other</option>
                </select>
              </FormGroup>
            </FormRow>

            <FormGroup>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your travel plans, preferred dates, budget, and any special requirements..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit">
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
};

export default Contact;