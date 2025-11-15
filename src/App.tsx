import React from 'react';
import { Router, Route } from './utils/Router.jsx';
import HomePage from './components/HomePage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

export default function App() {
  return (
    <Router fallback={<NotFoundPage />}>
      <Route path="/" component={HomePage} />
    </Router>
  );
}
