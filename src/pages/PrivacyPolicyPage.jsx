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

const LastUpdated = styled.div`
  text-align: center;
  padding: 20px;
  background: ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.medium};
  margin-top: 40px;
  font-style: italic;
  color: ${theme.colors.gray};
`;

const PrivacyPolicyPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <PageTitle>Privacy Policy</PageTitle>
        
        <ContentSection>
          <SectionTitle>Information We Collect</SectionTitle>
          <Paragraph>
            At Kama Travels, we collect information you provide directly to us, such as when you create an account, 
            make a booking, contact us for support, or sign up for our newsletter.
          </Paragraph>
          <List>
            <li>Personal information (name, email address, phone number)</li>
            <li>Payment information (credit card details, billing address)</li>
            <li>Travel preferences and booking history</li>
            <li>Communication preferences</li>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>How We Use Your Information</SectionTitle>
          <Paragraph>
            We use the information we collect to provide, maintain, and improve our services, including:
          </Paragraph>
          <List>
            <li>Processing your travel bookings and transactions</li>
            <li>Sending you booking confirmations and travel updates</li>
            <li>Providing customer support and responding to your inquiries</li>
            <li>Personalizing your travel experience and recommendations</li>
            <li>Sending promotional emails and marketing communications (with your consent)</li>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Information Sharing</SectionTitle>
          <Paragraph>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
            except in the following circumstances:
          </Paragraph>
          <List>
            <li>With travel service providers to fulfill your bookings</li>
            <li>With payment processors to process your transactions</li>
            <li>When required by law or to protect our rights</li>
            <li>With your explicit consent for specific purposes</li>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Data Security</SectionTitle>
          <Paragraph>
            We implement appropriate security measures to protect your personal information against unauthorized access, 
            alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
            storage is 100% secure.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Your Rights</SectionTitle>
          <Paragraph>
            You have the right to:
          </Paragraph>
          <List>
            <li>Access and update your personal information</li>
            <li>Request deletion of your personal data</li>
            <li>Opt-out of marketing communications</li>
            <li>Request a copy of your data</li>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions about this Privacy Policy or our privacy practices, 
            please contact us at privacy@kamatravels.com or call us at +91-XXXX-XXXX-XX.
          </Paragraph>
        </ContentSection>

        <LastUpdated>
          Last updated: September 18, 2025
        </LastUpdated>
      </ContentWrapper>
    </PageContainer>
  );
};

export default PrivacyPolicyPage;