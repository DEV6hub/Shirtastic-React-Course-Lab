import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Tabs from '../../Tabs/Tabs';

const SignUp = ({ signupTabs, activeTab, updateTab }) => {
  const history = useHistory();

  // TODO: AK Refactor to use context for user data.
  const onComplete = (e, step) => {
    if (step === 0) {
      updateTab(signupTabs[1].id);
    } else {
      history.push('/catalog');
    }
  };

  return (
    <div className="step1">
      {activeTab === signupTabs[0].id ? <h2>Sign up</h2> : null}
      <Tabs
        tabs={signupTabs}
        activeClassName="active"
        activeTab={activeTab}
        onTabClick={(id) => {
          updateTab(id);
        }}
      />
      {activeTab === signupTabs[0].id ? (
        <Step1 onComplete={onComplete} />
      ) : (
        <Step2 onComplete={onComplete} />
      )}
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
