import React, {useState} from "react";
import Tabs from "../Tabs/Tabs";
import "./shirt-options.css";
import ShirtStyles from "../ShirtStyles/ShirtStyles";




const tabOptions = [
  {
    id: "shirt-style",
    text: "Styles"
  },
  {
    id: "shirt-colours",
    text: "Colours"
  },
  {
    id: "shirt-graphics",
    text: "Graphics"
  },
  {
    id: "shirt-text",
    text: "Text"
  },
];

const ShirtOptions = ({onOptionSelected}) => {

  const [tab, setTab] = useState(tabOptions[0].id);

  return <div className="shirt-options">
    <div className="shirt-option-tabs">
      <Tabs tabs={tabOptions} active={tab} onTabClick={tabId => setTab(tabId)} />
    </div>
    <div className="options">
      {tab === tabOptions[0].id && <ShirtStyles onStyleSelected={data => onOptionSelected(data)} />}
    </div>
  </div>;
};


const ShirtStyle = ({onStyleSelected}) => {

};

export default ShirtOptions;
