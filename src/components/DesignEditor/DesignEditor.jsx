import React, { useReducer } from 'react';
import ToolTray from './ToolTray/ToolTray';
import ShirtPreview from './ShirtPreview/ShirtPreview';
import { designReducer } from '../../state/reducers';
import shirtType from '../../types/shirt';
import './design-editor.css';

const DesignEditor = ({ shirtToEdit }) => {
  const [shirt, updateShirt] = useReducer(designReducer, shirtToEdit);

  return (
    <div className="design-editor">
      <ToolTray shirt={shirt} updateShirt={updateShirt} />
      <ShirtPreview shirt={shirt} />
    </div>
  );
};

DesignEditor.propTypes = {
  shirtToEdit: shirtType.isRequired,
};

export default DesignEditor;
