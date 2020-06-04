import React, { useReducer } from 'react';
import ToolTray from './ToolTray/ToolTray';
import ShirtPreview from './ShirtPreview/ShirtPreview';
import './design-editor.css';
import { designReducer } from '../../state/reducers';

const shirtToEdit = {
  id: 2,
  name: '4 Coders',
  description: 'Mens Fine Jersey Short Sleeve',
  price: 14.99,
  image: 'MensShirt-red',
  gender: 'M',
  quantity: 0,
  subtotal: 0,
  graphic: 'graphic1.svg',
  font: "'Montserrat', sans-serif",
  text: 'KEEP CALM AND CODE ON',
  textColor: {
    name: 'green',
    color: '#44A265',
  },
  shirtStyle: 'MensShirt',
  shirtColor: {
    name: 'red',
    color: '#A7386A',
  },
  graphicColor: {
    name: 'white',
    color: '#FFFFFF',
  },
};

const DesignEditor = () => {
  const [shirt, updateShirt] = useReducer(designReducer, shirtToEdit);

  return (
    <div className="design-editor">
      <ToolTray shirt={shirt} updateShirt={updateShirt} />
      <ShirtPreview shirt={shirt} />
    </div>
  );
};

export default DesignEditor;
