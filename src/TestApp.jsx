import React from 'react';

function TestApp() {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      marginTop: '50px'
    }}>
      <h1 style={{ color: '#2c5aa0' }}>🌟 Kama Travels</h1>
      <h2>Website is Working!</h2>
      <p>This is a test to verify the basic setup is functioning.</p>
      <div style={{ marginTop: '30px' }}>
        <p>✅ React is loading</p>
        <p>✅ Vite build is working</p>
        <p>✅ GitHub Pages deployment is active</p>
      </div>
      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        backgroundColor: '#f0f8ff', 
        borderRadius: '10px',
        border: '2px solid #2c5aa0'
      }}>
        <h3>Your Journey Begins Here!</h3>
        <p>Full website will be restored shortly...</p>
      </div>
    </div>
  );
}

export default TestApp;