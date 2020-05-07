import React, { useState, useCallback } from 'react';
import './CatalogTabs.css';
import { Container, Row, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import Shirt from '../Shirt/Shirt';

const CatalogTabs = ({ shirtList, editShirt, addToCart }) => {
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
          <Row>
            {shirtList.map((shirt) => (
              <Shirt key={shirt.id} shirt={shirt} addToCart={addToCart} editShirt={editShirt} />
            ))}
          </Row>
        </TabPane>
        <TabPane tabId="2">
          {/* Men Shirt List Goes Here */}
          <Row>
            {shirtList
              .filter((shirt) => {
                return shirt.gender === 'M';
              })
              .map((shirt) => (
                <Shirt key={shirt.id} shirt={shirt} addToCart={addToCart} editShirt={editShirt} />
              ))}
          </Row>
        </TabPane>
        <TabPane tabId="3">
          {/* Women Shirt List Goes Here */}
          <Row>
            {shirtList
              .filter((shirt) => {
                return shirt.gender === 'W';
              })
              .map((shirt) => (
                <Shirt key={shirt.id} shirt={shirt} addToCart={addToCart} editShirt={editShirt} />
              ))}
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
};

// TODO AH Add Props Validation

export default CatalogTabs;
