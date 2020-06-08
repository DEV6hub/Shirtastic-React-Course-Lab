import { useCallback, useReducer } from 'react';
import { designReducer } from '../state/reducers';
import defaultShirt from '../constants/defaultShirt';
import { UPDATE_SHIRT } from '../constants/optionEventTypes';

const useEditor = () => {
  const [shirt, updateShirt] = useReducer(designReducer, defaultShirt);

  const selectShirt = useCallback((shirtList, shirtId) => {
    if (shirtList.length > 0) {
      const theList = [...shirtList];

      const shirtIndex = theList.findIndex((shirtItem) => {
        return shirtItem.id === parseInt(shirtId, 10);
      });

      if (shirtIndex !== -1) {
        updateShirt({ type: UPDATE_SHIRT, data: theList[shirtIndex] });
      }
    }
  }, []);

  return {
    shirt,
    selectShirt,
    updateShirt,
  };
};

export default useEditor;
