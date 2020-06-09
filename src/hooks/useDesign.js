import { useReducer } from 'react';
import { designReducer } from '../state/reducers';
import defaultShirt from '../constants/defaultShirt';

const useEditor = () => {
  const [shirt, updateShirt] = useReducer(designReducer, defaultShirt);

  return {
    shirt,
    updateShirt,
  };
};

export default useEditor;
