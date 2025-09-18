import React from 'react';
import styled from 'styled-components';

const SimpleContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #003580 0%, #0066cc 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-in;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: fadeIn 1s ease-in 0.5s both;
`;

const Status = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  animation: fadeIn 1s ease-in 1s both;
`;

function SimpleTest() {
  return (
    <SimpleContainer>
      <Title>🌟 Kama Travels</Title>
      <Subtitle>Your Journey Begins Here</Subtitle>
      <Status>
        <h3>✅ Website is Loading Successfully!</h3>
        <p>This confirms the deployment is working.</p>
        <p>Full website will be restored shortly...</p>
      </Status>
    </SimpleContainer>
  );
}

export default SimpleTest;