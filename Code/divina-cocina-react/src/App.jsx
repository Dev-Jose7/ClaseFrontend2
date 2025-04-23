// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import RecipeDetail from './components/RecipeDetail';
import NotFound from './pages/NotFound';

import { recipes } from '../data.js';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:category" element={<Category />} />
          <Route path="/receta/:id" element={<RecipeDetail recipes={recipes} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;