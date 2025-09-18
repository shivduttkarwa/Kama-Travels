import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Simple test component
function TestApp() {
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      fontSize: '24px',
      background: 'linear-gradient(135deg, #0066cc 0%, #1a73e8 100%)',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1>🎉 Kama Travels is Loading!</h1>
      <p>If you see this, React is working correctly.</p>
      <p>Now loading the full application...</p>
    </div>
  )
}

// Import the full app after a delay to test
setTimeout(() => {
  import('./App.jsx').then((AppModule) => {
    const App = AppModule.default;
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  }).catch(error => {
    console.error('Error loading main app:', error);
    document.getElementById('root').innerHTML = `
      <div style="padding: 50px; text-align: center; color: red;">
        <h2>Error Loading Application</h2>
        <p>${error.message}</p>
      </div>
    `;
  });
}, 1000);

// Render test component first
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
)