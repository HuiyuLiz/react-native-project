import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log('index.web.js loaded');

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found!');
} else {
  console.log('Root element found, rendering app...');
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
  console.log('App rendered successfully!');
}
