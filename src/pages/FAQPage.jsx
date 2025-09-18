import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyles';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 120px 20px 80px;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.colors.textPrimary};
  text-align: center;
  margin-bottom: 60px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const FAQContainer = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.large};
  padding: 40px;
  box-shadow: ${theme.shadows.light};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

const FAQItem = styled.div`
  border-bottom: 1px solid ${theme.colors.lightGray};
  margin-bottom: 20px;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const Question = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 20px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
  color: ${theme.colors.primary};
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
`;

const Answer = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  
  p {
    padding: 0 0 20px 0;
    font-size: 1rem;
    line-height: 1.7;
    color: ${theme.colors.textSecondary};
  }
`;

const ContactSection = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: linear-gradient(135deg, ${theme.colors.lightBlue}, #f0f8ff);
  border-radius: ${theme.borderRadius.medium};
  text-align: center;
  
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 15px;
  }
  
  p {
    color: ${theme.colors.textSecondary};
    margin-bottom: 20px;
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FAQPage = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book a travel package?",
      answer: "You can book a travel package by browsing our destinations, selecting your preferred package, and clicking 'Book Now'. Fill in your details, make the payment, and you'll receive a confirmation email with all the details."
    },
    {
      question: "What is included in the travel packages?",
      answer: "Our travel packages typically include accommodation, meals (as specified), transportation, guided tours, and entry fees to attractions. Specific inclusions vary by package and are clearly listed on each package page."
    },
    {
      question: "Can I customize my travel package?",
      answer: "Yes! We offer customizable packages to suit your preferences. Contact our travel experts to discuss your requirements, and we'll create a personalized itinerary just for you."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our cancellation policy varies depending on the package and timing of cancellation. Generally, cancellations made 30+ days before travel receive a full refund minus processing fees. Please check our Cancellation Policy page for detailed terms."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "Yes, we strongly recommend travel insurance and can help you purchase comprehensive coverage. Travel insurance protects against trip cancellations, medical emergencies, and other unforeseen circumstances."
    },
    {
      question: "What documents do I need for international travel?",
      answer: "For international travel, you'll need a valid passport (with at least 6 months validity), visa (if required), and any vaccination certificates. We'll provide a detailed document checklist upon booking."
    },
    {
      question: "Are meals included in the packages?",
      answer: "Meal inclusions vary by package. Some include all meals, others may include only breakfast or specific meals. Check the package details for exact meal inclusions, and we can accommodate dietary restrictions with advance notice."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 30 days in advance for domestic trips and 45-60 days for international travel. Early booking often comes with better rates and ensures availability, especially during peak seasons."
    },
    {
      question: "What if I need to change my travel dates?",
      answer: "Date changes are subject to availability and may incur additional charges depending on the fare rules. Contact us as soon as possible if you need to modify your booking, and we'll assist you with the best available options."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we offer special rates for group bookings (8+ people). Group travelers enjoy discounted rates, customized itineraries, and dedicated support. Contact our group booking specialist for more details."
    }
  ];

  return (
    <PageContainer>
      <ContentWrapper>
        <PageTitle>Frequently Asked Questions</PageTitle>
        
        <FAQContainer>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question onClick={() => toggleItem(index)}>
                {faq.question}
                <Icon isOpen={openItem === index}>+</Icon>
              </Question>
              <Answer isOpen={openItem === index}>
                <p>{faq.answer}</p>
              </Answer>
            </FAQItem>
          ))}
        </FAQContainer>

        <ContactSection>
          <h3>Still have questions?</h3>
          <p>Our travel experts are here to help you plan the perfect trip.</p>
          <a href="/contact">Contact Us</a> | <a href="tel:+91-XXXX-XXXX-XX">+91-XXXX-XXXX-XX</a>
        </ContactSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default FAQPage;