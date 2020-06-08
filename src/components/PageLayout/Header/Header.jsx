import React from 'react';
import { Link } from 'react-router-dom';
import CartControls from '../../CheckoutFlow/CartControls/CartControls';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import FormInput from '../../Forms/FormInput/FormInput';
import { useDesignContext } from '../../../state/contexts/designContext';
import './header.css';
import headerLogo from '../../../images/navlogo.png';

const Header = () => {
  const { shirtEdit, update } = useDesignContext();

  const updateName = ($event) => {
    $event.preventDefault();

    shirtEdit.name = $event.target.value;
    // update(sh)
    console.log('e', $event.target.value);
  };

  return (
    <header>
      <div className="left">
        <PrimaryButton
          btnStyle="navigation"
          onClick={() => {
            // TODO: AK: Implement call back;
            console.log('nav click');
          }}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </PrimaryButton>
        <div className="vertical-line" />
        <Link to="/">
          <img src={headerLogo} className="logo" alt="Shirtastic Logo - By Aquent Dev 6" />
        </Link>
      </div>
      <div className="right">
        {shirtEdit ? (
          <div className="shirt-edit-controls">
            <FormInput id="design-name" inputValue={shirtEdit.name} onChangeFn={updateName} />
            <PrimaryButton>Save</PrimaryButton>
          </div>
        ) : (
          <Link to="/create-shirt">
            <PrimaryButton>New Design</PrimaryButton>
          </Link>
        )}
        <div className="vertical-line" />
        <CartControls />
      </div>
    </header>
  );
};

export default Header;
