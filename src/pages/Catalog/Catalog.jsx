import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import Tabs from '../../components/Tabs/Tabs';
import CatalogGrid from '../../components/CatalogGrid/CatalogGrid';
import { useShirtsContext } from '../../state/contexts/shirtsContext';
import './Catalog.css';

const catalogTabs = [
  {
    id: 'all-designs',
    label: 'All Designs',
  },
  {
    id: 'mens',
    label: 'Mens',
  },
  {
    id: 'womens',
    label: 'Womens',
  },
];

const Catalog = () => {
  const { shirtList } = useShirtsContext();

  const [activeTab, setActiveTab] = useState(catalogTabs[0].id);

  const changeTab = (tabId) => {
    setActiveTab(tabId);
  };

  const filterList = (id) => {
    let list = [];

    switch (id) {
      case 'mens':
        list = shirtList.filter((shirt) => {
          return shirt.shirtStyle === 'MensShirt';
        });
        break;
      case 'womens':
        list = shirtList.filter((shirt) => {
          return shirt.shirtStyle === 'WomensShirt';
        });
        break;
      default:
        list = shirtList;
    }

    return list;
  };

  return (
    <PageLayout>
      <div className="catalog-wrapper">
        <div className="catalog-header">
          <Tabs tabs={catalogTabs} activeTab={activeTab} onTabClick={changeTab} />
          <div className="shirts-displayed">Showing {filterList(activeTab).length} Designs</div>
        </div>
        <CatalogGrid list={filterList(activeTab)} />
      </div>
    </PageLayout>
  );
};

export default Catalog;
