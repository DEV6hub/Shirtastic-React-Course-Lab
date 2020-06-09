import { useState, useReducer } from 'react';
import { designReducer } from '../state/reducers';
import defaultShirt from '../constants/defaultShirt';

const useEditor = () => {
  const [shirt, updateShirt] = useReducer(designReducer, defaultShirt);
  const [isNewDesign, setNewDesign] = useState(false);

  return {
    shirt,
    updateShirt,
    isNewDesign,
    setNewDesign,
  };
};

export default useEditor;
