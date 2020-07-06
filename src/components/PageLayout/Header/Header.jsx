import React from 'react';
import { useDesignContext } from '../../../state/contexts/designContext';
import { useShirtsContext } from '../../../state/contexts/shirtsContext';
import { DESIGN_NAME_EVENT } from '../../../constants/optionEventTypes';
import './header.css';
import headerLogo from '../../../images/navlogo.png';

const Header = () => {
  const { shirt, updateShirt, isNewDesign } = useDesignContext();
  const { addShirt, saveShirt } = useShirtsContext();

  const updateName = ($event) => {
    $event.preventDefault();
    updateShirt({ type: DESIGN_NAME_EVENT, data: $event.target.value });
  };

  return (
    <header>
      <div>
        <img src={headerLogo} className="logo" alt="Shirtastic Logo - By Aquent Dev 6" />
      </div>
    </header>
  );
};

export default Header;
