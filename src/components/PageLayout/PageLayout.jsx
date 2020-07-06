import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

const PageLayout = ({ children }) => (
  <>
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </>
);

export default PageLayout;
