import React from 'react';
import PropTypes from 'prop-types';
import Overlay from './Overlay/Overlay';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './page-layout.css';

const PageLayout = ({ children }) => (
  <>
    <Overlay />
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </>
);

PageLayout.propTypes = {
  children: PropTypes.node,
};

PageLayout.defaultProps = {
  children: null,
};

export default PageLayout;
