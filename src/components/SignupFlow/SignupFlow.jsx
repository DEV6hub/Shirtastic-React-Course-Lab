import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Tabs from '../Tabs/Tabs';
import postUser from '../../utils/userApi';
import { useUserContext } from '../../state/contexts/userContext';
import { CREATE_USER } from '../../constants/ActionTypes';

const SignUp = ({ signupTabs, activeTab, updateTab }) => {
  const history = useHistory();

  const [userData, updateUser] = useUserContext();

  const saveUser = async (user) => {
    try {
      const response = await postUser(user);

      updateUser({ type: CREATE_USER, response });
      updateTab(signupTabs[1].id);
    } catch (error) {
      history.push('/');
      console.log('error', error);
    }
  };

  const onComplete = async (data) => {
    if (data.userInfo) {
      const { email, password } = { ...data.userInfo };

      await saveUser({ ...userData, email, password });
    } else {
      const { email, password } = { ...userData };
      const newUser = { ...data.shippingInfo, email, password };

      await saveUser(newUser);
      history.push('/catalog');
    }
  };

  const onSkipShipping = () => {
    history.push('/catalog');
  };

  return (
    <div className="step1">
      {activeTab === signupTabs[0].id && <h2>Sign up</h2>}
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
        <Step2 onSkipShipping={onSkipShipping} onComplete={onComplete} />
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
