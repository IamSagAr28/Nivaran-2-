import React from 'react';
import { Router, Route } from './utils/Router.jsx';
import HomePage from './components/HomePage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import ProductPage from './components/ProductPage';
import ShopifyProductsPage from './components/shopify/ShopifyProductsPage';
import { ShopifyCartPage } from './components/shopify/ShopifyCartPage';
import ShopifyLoginPage from './components/shopify/ShopifyLoginPage';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';

// Check for required environment variables
const MissingEnvVars = () => {
  const missingVars = [];
  if (!import.meta.env.VITE_SHOPIFY_STORE_URL) missingVars.push('VITE_SHOPIFY_STORE_URL');
  if (!import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN) missingVars.push('VITE_SHOPIFY_STOREFRONT_TOKEN');

  if (missingVars.length === 0) return null;

  return (
    <div style={{
      padding: '2rem',
      margin: '2rem auto',
      maxWidth: '600px',
      backgroundColor: '#fee2e2',
      border: '1px solid #ef4444',
      borderRadius: '0.5rem',
      color: '#b91c1c',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h2 style={{ marginTop: 0 }}>⚠️ Configuration Error</h2>
      <p>The following environment variables are missing in your deployment:</p>
      <ul style={{ backgroundColor: 'rgba(255,255,255,0.5)', padding: '1rem 2rem', borderRadius: '0.25rem' }}>
        {missingVars.map(v => <li key={v} style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{v}</li>)}
      </ul>
      <p>Please add these to your Vercel/Netlify project settings.</p>
    </div>
  );
};

export default function App() {
  // If env vars are missing, show the error screen instead of the app
  if (!import.meta.env.VITE_SHOPIFY_STORE_URL || !import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN) {
    return <MissingEnvVars />;
  }

  return (
    <CartProvider>
      <AuthProvider>
        <Router fallback={<NotFoundPage />}>
          <Route path="/" component={HomePage} />
          <Route path="/products" component={ShopifyProductsPage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/cart" component={ShopifyCartPage} />
          <Route path="/login" component={ShopifyLoginPage} />
        </Router>
      </AuthProvider>
    </CartProvider>
  );
}
