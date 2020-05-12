import React from 'react';
import PropTypes from 'prop-types';
import './tabs.css';

/*
Format of the tabs
tabs = [
  {
    id: some string to identify the tab. Unique,
    text: the text that shows in the tab
  }
]
 */
const Tabs = ({ tabs, active, activeClassName, onTabClick }) => (
  <div className="tabs">
    {tabs.map((tab) => (
      <Tab
        key={tab.id}
        isActive={tab.id === active}
        label={tab.text}
        onClick={() => onTabClick(tab.id)}
        activeClassName={activeClassName}
      />
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.node),
  active: PropTypes.string,
  activeClassName: PropTypes.string,
  onTabClick: () => {
    return null;
  },
};

Tabs.defaultProps = {
  tabs: [],
  active: 'no',
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
