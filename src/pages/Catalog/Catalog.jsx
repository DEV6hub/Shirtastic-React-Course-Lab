import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import './Catalog.css';
import Tabs from '../../components/Tabs/Tabs';

// import CatalogTabs from '../../components/CatalogTabs/CatalogTabs';

const catalogTabs = [
  {
    id: 'all-designs',
    label: 'All Designs',
  },
  {
    id: 'mens-shirts',
    label: 'Mens',
  },
  {
    id: 'womens-shirts',
    label: 'Womens',
  },
];

const selectedTab = catalogTabs[0].id;
const shirts = 12;

const changeTab = (id) => {
  console.log('kra tabn', id);
};

const Catalog = () => {
  return (
    <PageLayout>
      <div className="catalog-wrapper">
        <div className="catalog-header">
          <Tabs tabs={catalogTabs} activeTab={selectedTab} onTabClick={changeTab} />
          <div className="shirts-displayed">Showing {shirts} Designs</div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Catalog;
