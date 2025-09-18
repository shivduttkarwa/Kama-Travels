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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  
  th, td {
    border: 1px solid ${theme.colors.border};
    padding: 12px;
    text-align: left;
  }
  
  th {
    background: ${theme.colors.lightBlue};
    color: ${theme.colors.primary};
    font-weight: 600;
  }
  
  td {
    color: ${theme.colors.textSecondary};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    
    th, td {
      padding: 8px;
    }
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #fff3cd, #ffeaa7);
  border: 1px solid #ffc107;
  border-radius: ${theme.borderRadius.medium};
  padding: 20px;
  margin: 20px 0;
  
  h4 {
    color: #856404;
    margin-bottom: 10px;
  }
  
  p {
    color: #856404;
    margin: 0;
  }
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

const ContactInfo = styled.div`
  text-align: center;
  padding: 20px;
  background: ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.medium};
  margin-top: 40px;
  
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 15px;
  }
  
  p {
    color: ${theme.colors.textSecondary};
    margin-bottom: 10px;
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

const CancellationPolicyPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <PageTitle>Cancellation Policy</PageTitle>
        
        <ContentSection>
          <SectionTitle>General Cancellation Terms</SectionTitle>
          <Paragraph>
            At Kama Travels, we understand that travel plans can change. Our cancellation policy is designed to be fair 
            and transparent while protecting both our customers and business operations.
          </Paragraph>
          
          <HighlightBox>
            <h4>Important Notice</h4>
            <p>All cancellation requests must be made in writing via email or through our customer portal. 
            Verbal cancellations are not accepted.</p>
          </HighlightBox>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Domestic Travel Cancellation Charges</SectionTitle>
          <Table>
            <thead>
              <tr>
                <th>Cancellation Period</th>
                <th>Cancellation Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>45+ days before departure</td>
                <td>10% of total package cost</td>
              </tr>
              <tr>
                <td>30-44 days before departure</td>
                <td>25% of total package cost</td>
              </tr>
              <tr>
                <td>15-29 days before departure</td>
                <td>50% of total package cost</td>
              </tr>
              <tr>
                <td>7-14 days before departure</td>
                <td>75% of total package cost</td>
              </tr>
              <tr>
                <td>Less than 7 days or No-Show</td>
                <td>100% of total package cost</td>
              </tr>
            </tbody>
          </Table>
        </ContentSection>

        <ContentSection>
          <SectionTitle>International Travel Cancellation Charges</SectionTitle>
          <Table>
            <thead>
              <tr>
                <th>Cancellation Period</th>
                <th>Cancellation Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>60+ days before departure</td>
                <td>15% of total package cost</td>
              </tr>
              <tr>
                <td>45-59 days before departure</td>
                <td>30% of total package cost</td>
              </tr>
              <tr>
                <td>30-44 days before departure</td>
                <td>50% of total package cost</td>
              </tr>
              <tr>
                <td>15-29 days before departure</td>
                <td>75% of total package cost</td>
              </tr>
              <tr>
                <td>Less than 15 days or No-Show</td>
                <td>100% of total package cost</td>
              </tr>
            </tbody>
          </Table>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Special Conditions</SectionTitle>
          <List>
            <li><strong>Peak Season:</strong> During peak seasons (Dec-Jan, April-May), higher cancellation charges may apply</li>
            <li><strong>Visa Rejection:</strong> 100% refund if visa is rejected (valid documents required)</li>
            <li><strong>Medical Emergency:</strong> Special consideration given with valid medical certificates</li>
            <li><strong>Force Majeure:</strong> In case of natural disasters or government restrictions, flexible policies apply</li>
            <li><strong>Flight Delays:</strong> No refund for delays caused by airlines or external factors</li>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Refund Process</SectionTitle>
          <Paragraph>
            Refunds will be processed within 7-10 working days after deducting applicable cancellation charges. 
            Refunds will be made to the original payment method used for booking.
          </Paragraph>
          <List>
            <li>Credit card refunds: 5-7 working days</li>
            <li>Debit card refunds: 7-10 working days</li>
            <li>Net banking: 3-5 working days</li>
            <li>UPI/Wallet: 1-3 working days</li>
          </List>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Modification Policy</SectionTitle>
          <Paragraph>
            Changes to bookings are subject to availability and the following conditions:
          </Paragraph>
          <List>
            <li>Date changes: INR 2,500 per person (domestic), INR 5,000 per person (international)</li>
            <li>Name changes: INR 1,500 per person (subject to airline/hotel policies)</li>
            <li>Package upgrades: Price difference + INR 1,000 processing fee</li>
            <li>Room category changes: Subject to availability and price difference</li>
          </List>
        </ContentSection>

        <ContactInfo>
          <h3>Need Help with Cancellation?</h3>
          <p>Contact our customer support team for assistance</p>
          <p>
            Email: <a href="mailto:cancellations@kamatravels.com">cancellations@kamatravels.com</a>
          </p>
          <p>
            Phone: <a href="tel:+91-XXXX-XXXX-XX">+91-XXXX-XXXX-XX</a>
          </p>
          <p>Working Hours: 9:00 AM - 6:00 PM (Mon-Sat)</p>
        </ContactInfo>
      </ContentWrapper>
    </PageContainer>
  );
};

export default CancellationPolicyPage;