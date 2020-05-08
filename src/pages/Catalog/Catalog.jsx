import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Catalog.css';
import CatalogTabs from '../../components/CatalogTabs/CatalogTabs';
import { useShirtsContext } from '../../state/contexts/shirtsContext';
import Navigation from '../../components/Navigation/Navigation';

const Catalog = () => {
  const { isFetchingShirts } = useShirtsContext();

  return (
    <div>
      <Navigation isDesign={false} />
      <div>
        <div>
          {isFetchingShirts ? <h1 style={{ color: 'red' }}>FETCHING SHIRTS</h1> : ''}
          <CatalogTabs />
        </div>
      </div>
    </div>
  );
};

Catalog.propTypes = {};

export default Catalog;
