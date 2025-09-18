import React from 'react';
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

const ContentSection = styled.section`
  background: white;
  border-radius: ${theme.borderRadius.large};
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: ${theme.shadows.light};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin-bottom: 20px;
  border-bottom: 2px solid ${theme.colors.lightBlue};
  padding-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${theme.colors.textSecondary};
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 20px 0;
  padding-left: 20px;
  
  li {
    font-size: 1rem;
    line-height: 1.7;
    color: ${theme.colors.textSecondary};
    margin-bottom: 10px;
  }
`;

const OrderedList = styled.ol`
  margin: 20px 0;
  padding-left: 20px;
  
  li {
    font-size: 1rem;
    line-height: 1.7;
    color: ${theme.colors.textSecondary};
    margin-bottom: 15px;
  }
`;

const ImportantBox = styled.div`
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.colors.borderRadius};
  padding: 20px;
  margin: 20px 0;
  
  h4 {
    color: ${theme.colors.primary};
    margin-bottom: 10px;
  }
  
  p {
    color: ${theme.colors.navy};
    margin: 0;
  }
`;

const LastUpdated = styled.div`
  text-align: center;
  padding: 20px;
  background: ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.medium};
  margin-top: 40px;
  font-style: italic;
  color: ${theme.colors.gray};
`;

const TermsConditionsPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <PageTitle>Terms & Conditions</PageTitle>
        
        <ContentSection>
          <SectionTitle>Acceptance of Terms</SectionTitle>
          <Paragraph>
            By accessing and using the services provided by Kama Travels, you accept and agree to be bound by the terms 
            and provision of this agreement. These terms apply to all visitors, users, and others who access or use the service.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Booking Terms</SectionTitle>
          <OrderedList>
            <li><strong>Booking Confirmation:</strong> All bookings are subject to availability and confirmation from our end. A booking is confirmed only upon receipt of full payment and issuance of booking confirmation.</li>
            <li><strong>Payment Terms:</strong> Full payment is required at the time of booking unless otherwise specified. We accept various payment methods including credit cards, debit cards, and online transfers.</li>
            <li><strong>Package Prices:</strong> All prices are quoted in Indian Rupees (INR) and are subject to change without prior notice until booking is confirmed.</li>
            <li><strong>Group Bookings:</strong> Special terms may apply for group bookings of 8 or more passengers.</li>
          </OrderedList>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Travel Documentation</SectionTitle>
          <Paragraph>
            It is your responsibility to ensure that you have valid travel documents including:
          </Paragraph>
          <List>
            <li>Valid passport with minimum 6 months validity from date of return</li>
            <li>Appropriate visas for international travel</li>
            <li>Vaccination certificates where required</li>
            <li>Travel insurance (highly recommended)</li>
          </List>
          <ImportantBox>
            <h4>Important Notice</h4>
            <p>Kama Travels is not responsible for any issues arising from incomplete or invalid travel documentation.</p>
          </ImportantBox>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Liability Limitations</SectionTitle>
          <Paragraph>
            Kama Travels acts as an intermediary between you and various service providers including airlines, hotels, 
            transport companies, and local tour operators. Our liability is limited to the following:
          </Paragraph>
          <List>
            <li>We are not liable for delays, cancellations, or changes by airlines or other service providers</li>
            <li>We are not responsible for loss, damage, or theft of personal belongings</li>
            <li>Our maximum liability is limited to the cost of the travel package</li>
            <li>We are not liable for injuries, accidents, or medical emergencies during travel</li>
            <li>Force majeure events (natural disasters, political unrest, etc.) are beyond our control</li>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Traveler Responsibilities</SectionTitle>
          <List>
            <li>Arrive at designated meeting points on time</li>
            <li>Follow local laws and customs of the destination</li>
            <li>Carry valid identification and travel documents</li>
            <li>Inform us of any medical conditions or dietary requirements</li>
            <li>Take care of personal belongings and valuables</li>
            <li>Follow safety instructions provided by tour guides</li>
            <li>Respect other travelers and local communities</li>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Changes and Cancellations</SectionTitle>
          <Paragraph>
            Changes to confirmed bookings are subject to availability and may incur additional charges:
          </Paragraph>
          <List>
            <li>Date changes must be requested at least 15 days before departure</li>
            <li>Name changes may be permitted subject to supplier policies and charges</li>
            <li>Package modifications may result in price differences</li>
            <li>Cancellation charges apply as per our cancellation policy</li>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Force Majeure</SectionTitle>
          <Paragraph>
            Kama Travels shall not be liable for any failure to perform its obligations due to circumstances beyond 
            reasonable control, including but not limited to:
          </Paragraph>
          <List>
            <li>Natural disasters (earthquakes, floods, hurricanes)</li>
            <li>Government actions or travel advisories</li>
            <li>Terrorism or security threats</li>
            <li>Airline strikes or operational issues</li>
            <li>Pandemic or health emergencies</li>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Dispute Resolution</SectionTitle>
          <Paragraph>
            Any disputes arising from these terms shall be subject to the jurisdiction of courts in [Your City]. 
            We encourage resolving disputes through direct communication before pursuing legal action.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Privacy and Data Protection</SectionTitle>
          <Paragraph>
            Your personal information is collected and processed in accordance with our Privacy Policy. 
            We are committed to protecting your data and using it only for legitimate business purposes.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Modifications to Terms</SectionTitle>
          <Paragraph>
            Kama Travels reserves the right to modify these terms and conditions at any time. 
            Updated terms will be posted on our website and will be effective immediately upon posting.
          </Paragraph>
        </ContentSection>

        <LastUpdated>
          Last updated: September 18, 2025
        </LastUpdated>
      </ContentWrapper>
    </PageContainer>
  );
};

export default TermsConditionsPage;