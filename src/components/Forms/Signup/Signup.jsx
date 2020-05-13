import React from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1/Step1';
import Tabs from '../../Tabs/Tabs';

const SignUp = ({ signupTabs, activeTab, updateTab }) => {
  return (
    <div className="step1">
      <h2>Sign up</h2>
      <Tabs
        tabs={signupTabs}
        activeClassName="active"
        activeTab={activeTab}
        onTabClick={(id) => {
          updateTab(id);
        }}
      />
      <Step1 />
    </div>
  );
};

SignUp.propTypes = {
  signupTabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  activeTab: PropTypes.string,
  updateTab: PropTypes.func,
};

SignUp.defaultProps = {
  signupTabs: [],
  activeTab: 'step-1-form',
  updateTab: () => {
    return null;
  },
};

export default SignUp;
