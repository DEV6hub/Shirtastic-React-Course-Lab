import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import CatalogGrid from '../../components/CatalogGrid/CatalogGrid';
import Tabs from '../../components/Tabs/Tabs';
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
  const shirtList = [
    {
      id: 1,
      name: 'Happy Shirt',
      description: 'Womens Fine Jersey Short Sleeve',
      price: 14.99,
      image: 'WomensShirt-blue',
      quantity: 0,
      subtotal: 0,
      graphic: 'graphic12.svg',
      font: "'Orbitron', sans-serif",
      text: 'happy little trees',
      textColor: { name: 'white', color: '#FFFFFF' },
      shirtStyle: 'WomensShirt',
      shirtColor: { name: 'blue', color: '#2674A8' },
      graphicColor: { color: '#444444', name: 'black' },
    },
    {
      id: 2,
      name: '4 Coders',
      description: 'Mens Fine Jersey Short Sleeve',
      price: 14.99,
      image: 'MensShirt-red',
      quantity: 0,
      subtotal: 0,
      graphic: 'graphic1.svg',
      font: "'Montserrat', sans-serif",
      text: 'KEEP CALM AND CODE ON',
      textColor: { name: 'green', color: '#44A265' },
      shirtStyle: 'MensShirt',
      shirtColor: { name: 'red', color: '#A7386B' },
      graphicColor: { color: '#44a264', name: 'green' },
    },
    {
      id: 3,
      name: 'Emoji Shirt',
      description: 'Womens Fine Jersey Short Sleeve',
      price: 15.99,
      image: 'WomensShirt-red',
      quantity: 0,
      subtotal: 0,
      graphic: 'graphic14.svg',
      font: "'Orbitron', sans-serif",
      text: '',
      textColor: { name: 'white', color: '#FFFFFF' },
      shirtStyle: 'WomensShirt',
      shirtColor: { name: 'red', color: '#A7386B' },
      graphicColor: { color: '#f4da70', name: 'yellow' },
    },
  ];

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
