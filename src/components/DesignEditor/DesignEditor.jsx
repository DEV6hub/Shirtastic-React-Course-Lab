import React from 'react';
import PropTypes from 'prop-types';
import ToolTray from './ToolTray/ToolTray';
import ShirtPreview from './ShirtPreview/ShirtPreview';
import shirtType from '../../types/shirt';
import './design-editor.css';

const DesignEditor = ({ shirtToEdit, updateShirt }) => (
  <div className="design-editor">
    <ToolTray shirt={shirtToEdit} updateShirt={updateShirt} />
    <ShirtPreview shirt={shirtToEdit} />
  </div>
);

DesignEditor.propTypes = {
  shirtToEdit: shirtType.isRequired,
  updateShirt: PropTypes.func.isRequired,
};

export default DesignEditor;
