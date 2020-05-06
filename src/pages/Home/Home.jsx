import React, { useState, useCallback } from 'react';
import './Home.css';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
// import classnames from 'classnames';

import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import Shipping from '../../components/Shipping/Shipping';

import logoVertical from '../../images/Shirtastic-vertical.svg';

const Home = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const info = { activeTab, email, password };

  // TODO AH Replace with smaller code
  const toggle = useCallback(
    (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    },
    [setActiveTab, activeTab],
  );

  const selectedTabId = useCallback((tabId) => setActiveTab(tabId), [setActiveTab]);

  const signUpData = useCallback(
    ({ email, password }) => {
      setEmail(email);
      setPassword(password);
    },
    [setEmail, setPassword],
  );

  return (
    <div className="home">
      {activeTab === '1' ? (
        <div className="left-column">
          {/* Login Component Goes Here */}
          <Login userSignUpData={info} />
        </div>
      ) : null}

      <div className="middle-column">
        <img className="vertical-logo" src={logoVertical} alt="vertical logo" />
        <div className="copyright text-center">
          © 2020 DEV6 – A division of The New Toronto Group Inc.
        </div>
      </div>
      <div className={`left-column ${activeTab === '2' ? 'shipping-col' : ''}`}>
        {activeTab === '1' ? <h2 className="text-center">Sign up</h2> : null}
        <Nav tabs className="home-tabs">
          <NavItem>
            <NavLink
              className={activeTab === '1' ? 'active' : ''}
              onClick={() => {
                toggle('1');
              }}
            >
              Step 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '2' ? 'active' : ''}
              onClick={() => {
                toggle('2');
              }}
            >
              Step 2
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {/* Signup Component Goes Here */}
            <Signup onSelectTabId={selectedTabId} userSignUpData={signUpData} />
          </TabPane>
          <TabPane tabId="2">
            {/* Shipping Component Goes Here */}
            <Shipping signUpdata={info} />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default Home;
