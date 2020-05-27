import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import Tabs from '../../components/Tabs/Tabs';
import CatalogGrid from '../../components/CatalogGrid/CatalogGrid';
import { useShirtsContext } from '../../state/contexts/shirtsContext';
import './Catalog.css';

// TODO: AK: Refactor for tab change.

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

const activeTab = catalogTabs[0].id;
const shirts = 12;

const changeTab = (id) => {
  console.log('kra tabn', id);
};

const Catalog = () => {
  const { shirtList } = useShirtsContext();
  return (
    <PageLayout>
      <div className="catalog-wrapper">
        <div className="catalog-header">
          <Tabs tabs={catalogTabs} activeTab={activeTab} onTabClick={changeTab} />
          <div className="shirts-displayed">Showing {shirts} Designs</div>
        </div>
        <CatalogGrid list={shirtList} />
      </div>
    </PageLayout>
  );
};

export default Catalog;
