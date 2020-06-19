import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tabs from '../../Tabs/Tabs';
import StyleSelector from '../StyleSelector/StyleSelector';
import ColorPicker from '../ColorPicker/ColorPicker';
import GraphicPicker from '../GraphicPicker/GraphicPicker';
import ShirtText from '../ShirtText/ShirtText';

import {
  styleEvent,
  shirtColourEvent,
  graphicsEvent,
  graphicsColorEvent,
  textEvent,
  textFontEvent,
  textColorEvent,
} from '../../../state/redux/actions/actionCreators';

import './tool-tray.css';

const tabOptions = [
  {
    id: 'shirt-style',
    label: 'Styles',
  },
  {
    id: 'shirt-colours',
    label: 'Colours',
  },
  {
    id: 'shirt-graphics',
    label: 'Graphics',
  },
  {
    id: 'shirt-text',
    label: 'Text',
  },
];

const ToolTray = () => {
  const [tab, setTab] = useState(tabOptions[0].id);
  const shirt = useSelector((state) => state);
  const dispatch = useDispatch();

  if (!shirt) return null;

  return (
    <div className="shirt-options">
      <div className="shirt-option-tabs">
        <Tabs
          tabs={tabOptions}
          activeTab={tab}
          activeClassName="active"
          onTabClick={(tabId) => setTab(tabId)}
        />
      </div>
      <div className="options">
        {tab === tabOptions[0].id && (
          <StyleSelector
            selectedStyle={shirt.shirtStyle}
            selectedShirtColor={shirt.shirtColor}
            onStyleSelected={(style) => dispatch(styleEvent(style))}
          />
        )}
        {tab === tabOptions[1].id && (
          <ColorPicker
            title="Choose a shirt color"
            selectedColor={shirt.shirtColor}
            onColorSelected={(color) => dispatch(shirtColourEvent(color))}
          />
        )}
        {tab === tabOptions[2].id && (
          <GraphicPicker
            selectedGraphic={shirt.graphic}
            selectedGraphicColor={shirt.graphicColor}
            onGraphicSelected={(graphic) => dispatch(graphicsEvent(graphic))}
            onGraphicColorSelected={(color) => dispatch(graphicsColorEvent(color))}
          />
        )}
        {tab === tabOptions[3].id && (
          <ShirtText
            selectedTextColor={shirt.textColor}
            selectedShirtFont={shirt.font}
            shirtText={shirt.text}
            onTextChange={(text) => dispatch(textEvent(text))}
            onTextFontChange={(font) => dispatch(textFontEvent(font))}
            onTextColorChange={(color) => dispatch(textColorEvent(color))}
          />
        )}
      </div>
    </div>
  );
};

export default ToolTray;
