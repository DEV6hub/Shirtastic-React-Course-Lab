import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import CartControls from '../../CheckoutFlow/CartControls/CartControls';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import FormInput from '../../Forms/FormInput/FormInput';
import { useDesignContext } from '../../../state/contexts/designContext';
import { DESIGN_NAME_EVENT } from '../../../constants/optionEventTypes';
import './header.css';
import headerLogo from '../../../images/navlogo.png';

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const { shirt, updateShirt } = useDesignContext();

  const updateName = ($event) => {
    $event.preventDefault();
    updateShirt({ type: DESIGN_NAME_EVENT, data: $event.target.value });
  };

  const saveDesign = ($event) => {
    // TODO: AK: Implement save design.
    console.log('save design', $event);
  };

  return (
    <header>
      <div className="left">
        <PrimaryButton
          btnStyle="navigation"
          onClick={($event) => {
            $event.preventDefault();
            history.push('/catalog');
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
        {location.pathname.indexOf('design') > -1 ? (
          <div className="shirt-edit-controls">
            <FormInput id="design-name" inputValue={shirt.name} onChangeFn={updateName} />
            <PrimaryButton onClick={saveDesign}>Save</PrimaryButton>
          </div>
        ) : (
          <Link to="/design" className="button button-primary">
            New Design
          </Link>
        )}
        <div className="vertical-line" />
        <CartControls />
      </div>
    </header>
  );
};

export default Header;
