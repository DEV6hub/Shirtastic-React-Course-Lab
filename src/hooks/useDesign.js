import { useState, useReducer } from 'react';
import { designReducer } from '../state/reducers';
import initialShirt from '../constants/initialShirt';

const useEditor = () => {
  const [shirt, updateShirt] = useReducer(designReducer, initialShirt);
  const [isNewDesign, setNewDesign] = useState(false);

  return {
    shirt,
    updateShirt,
    isNewDesign,
    setNewDesign,
  };
};

export default useEditor;
