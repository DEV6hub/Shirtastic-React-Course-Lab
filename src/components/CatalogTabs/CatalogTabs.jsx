import React, { useState, useCallback } from 'react';
import './CatalogTabs.css';
import { Container, Row, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import Shirt from '../Shirt/Shirt';
import { useShirtsContext } from '../../state/contexts/shirtsContext';

const CatalogTabs = () => {
  const { shirtList } = useShirtsContext();
  console.log(shirtList);
  const [activeTab, setActiveTab] = useState('1');

  const toggle = useCallback(
    (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    },
    [setActiveTab, activeTab],
  );

  return (
    <Container fluid className="fluid-container">
      <Nav tabs className="catalog-tabs">
        <NavItem>
          <NavLink
            className={activeTab === '1' ? 'active' : ''}
            onClick={() => {
              toggle('1');
            }}
          >
            All Designs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '2' ? 'active' : ''}
            onClick={() => {
              toggle('2');
            }}
          >
            Men
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '3' ? 'active' : ''}
            onClick={() => {
              toggle('3');
            }}
          >
            Women
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {/* All Shirt List Goes Here */}
          <div className="shirts-container">
            {shirtList.map((shirt) => {
              // return shirt.name;
              return <Shirt key={shirt.id} shirt={shirt} />;
            })}
          </div>
        </TabPane>
        <TabPane tabId="2">
          {/* Men Shirt List Goes Here */}
          <div className="shirts-container">
            {/* {shirtList
              .filter((shirt) => {
                return shirt.gender === 'M';
              })
              .map((shirt) => (
                <Shirt key={shirt.id} shirt={shirt} />
              ))} */}
          </div>
        </TabPane>
        <TabPane tabId="3">
          {/* Women Shirt List Goes Here */}
          <div className="shirts-container">
            {/* {shirtList
              .filter((shirt) => {
                return shirt.gender === 'W';
              })
              .map((shirt) => (
                <Shirt key={shirt.id} shirt={shirt} />
              ))} */}
          </div>
        </TabPane>
      </TabContent>
    </Container>
  );
};

CatalogTabs.propTypes = {};
export default CatalogTabs;
