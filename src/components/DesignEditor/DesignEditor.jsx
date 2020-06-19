import React from 'react';
import ToolTray from './ToolTray/ToolTray';
import ShirtPreview from './ShirtPreview/ShirtPreview';
import './design-editor.css';

const DesignEditor = () => {
  return (
    <div className="design-editor">
      <ToolTray />
      <ShirtPreview />
    </div>
  );
};

export default DesignEditor;
