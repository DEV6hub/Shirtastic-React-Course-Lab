import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const PageLayout = ({children}) => <>
  <Header />
  <div className="content">
    {children}
  </div>
  <Footer />
</>;

export default PageLayout;
