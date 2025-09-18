import styled from 'styled-components';

export const theme = {
  colors: {
    primary: '#0066cc',
    secondary: '#1a73e8',
    accent: '#ff6b35',
    dark: '#1c1c1c',
    light: '#ffffff',
    gray: '#6a6a6a',
    lightGray: '#f5f5f5',
    darkGray: '#333333',
    blue: '#0066cc',
    lightBlue: '#e8f4fd',
    navy: '#003580',
    orange: '#ff6b35',
    green: '#4caf50',
    border: '#e0e0e0',
    background: '#fafafa',
    textPrimary: '#1c1c1c',
    textSecondary: '#6a6a6a',
    textLight: '#999999'
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    large: '1200px',
    xlarge: '1440px'
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.1)',
    medium: '0 2px 8px rgba(0,0,0,0.1)',
    large: '0 4px 16px rgba(0,0,0,0.1)',
    xl: '0 8px 32px rgba(0,0,0,0.1)',
    card: '0 2px 8px rgba(0,0,0,0.08)'
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    xl: '16px'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  }
};

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 16px;
  }
`;

export const Section = styled.section`
  padding: 80px 0;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 48px 0;
  }
`;

export const SectionTitle = styled.h2`
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

export const Button = styled.button`
  padding: 14px 24px;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.medium};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: none;
  line-height: 1.5;
  
  &:hover {
    background: ${theme.colors.navy};
    transform: none;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.large};
  padding: 24px;
  box-shadow: ${theme.shadows.card};
  transition: all 0.2s ease;
  border: 1px solid ${theme.colors.border};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
`;