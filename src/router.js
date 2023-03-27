import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './screens/homePage';
import AboutPage from './screens/aboutPage';
import ContactPage from './screens/contactPage';
import ProductPage from './screens/productPage';
import Navbar from './components/nav/navbar';

const Router = () => {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactUs" element={<ContactPage />} />
          <Route path="/product/:refId" element={<ProductPage />} />
        </Routes>

      </HashRouter>
    </div>
  );
};

export default Router;
