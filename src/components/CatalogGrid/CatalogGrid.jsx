import React from 'react';
import Shirt from '../Shirt/Shirt';
import './catalog-grid.css';

const CatalogGrid = ({ list }) => {
  return (
    <div className="grid-container">
      {list.map((item) => {
        return <Shirt key={item.id} shirt={item} />;
      })}
    </div>
  );
};

export default CatalogGrid;