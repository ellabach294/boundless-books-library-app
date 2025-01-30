import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import TrendingBooks from './pages/TrendingBooks/TrendingBooks';
import SearchResults from './pages/SearchResults/SearchResults';
import BookDetails from './components/BookDetails/BookDetails';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<TrendingBooks />} />
          <Route path="/search" element={<SearchResults />} />
        </Route>
        <Route path="/book/works/:id" element={<BookDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
);
