import React from 'react';
import PropTypes from 'prop-types';
import './tabs.css';

const Tabs = ({ tabs, activeTab, activeClassName, onTabClick }) => (
  <div className="tabs-container">
    <div className="tabs">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          isActive={tab.id === activeTab}
          label={tab.label}
          onClick={() => {
            onTabClick(tab.id);
          }}
          activeClassName={activeClassName}
        />
      ))}
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  activeTab: PropTypes.string,
  activeClassName: PropTypes.string,
  onTabClick: () => {
    return null;
  },
};

Tabs.defaultProps = {
  tabs: [{ id: '', label: '' }],
  activeTab: null,
  activeClassName: 'active',
  onTabClick: (value) => {
    console.log(`${value} is being sent through but no function is handling it`);
  },
};

const Tab = ({ label, isActive, onClick, activeClassName }) => (
  <button type="button" className={isActive ? activeClassName : ''} onClick={onClick}>
    {label}
  </button>
);

Tab.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  activeClassName: PropTypes.string,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  label: 'tab',
  isActive: false,
  activeClassName: 'active',
  onClick: () => {
    return null;
  },
};

export default Tabs;
