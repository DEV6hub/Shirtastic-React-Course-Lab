import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
// import './catalog.css';
// import Tabs from '../../components/Tabs/Tabs';
// import Design from '../../components/Design/Design';
import CatalogTabs from '../../components/CatalogTabs/CatalogTabs';

const catalogTabs = [
  {
    id: 'all-designs',
    text: 'All Designs',
  },
  {
    id: 'mens-shirts',
    text: 'Mens',
  },
  {
    id: 'womens-shirts',
    text: 'Womens',
  },
];

const selectedTab = catalogTabs[0].id;

const numberOfShirts = 8;

const Catalog = () => (
  <PageLayout>
    <div className="catalog">
      <div className="catalog-header">
        {/* <Tabs tabs={catalogTabs} active={selectedTab} /> */}
        {/* <div className="shirts-displayed">Showing {numberOfShirts} Designs</div> */}
        <CatalogTabs />
      </div>
      <div className="catalog-shirts" />
    </div>
    {/* <Design /> */}
  </PageLayout>
);

export default Catalog;
