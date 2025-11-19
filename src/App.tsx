import React from 'react';
import { Router, Route } from './utils/Router.jsx';
import HomePage from './components/HomePage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';

export default function App() {
  return (
    <Router fallback={<NotFoundPage />}>
      <Route path="/" component={HomePage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/cart" component={CartPage} />
    </Router>
  );
}
