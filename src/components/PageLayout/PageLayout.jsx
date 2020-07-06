import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import './page-layout.css';

const PageLayout = ({ children }) => (
  <>
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </>
);

export default PageLayout;
