import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import './Catalog.css';
// import Tabs from '../../components/Tabs/Tabs';
// import Design from '../../components/Design/Design';
import CatalogTabs from '../../components/CatalogTabs/CatalogTabs';

const Catalog = () => (
  <PageLayout>
    <CatalogTabs />
  </PageLayout>
);

export default Catalog;
