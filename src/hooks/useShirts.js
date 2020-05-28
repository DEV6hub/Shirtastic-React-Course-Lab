import { useReducer, useCallback, useEffect } from 'react';
import { shirtsReducer } from '../state/reducers';
import {
  REQUEST_SHIRTS,
  REQUEST_SHIRTS_SUCCESS,
  REQUEST_SHIRTS_FAILURE,
  CREATE_SHIRT,
  UPDATE_SHIRT,
} from '../constants/ActionTypes';
import { putShirt, postShirt, getShirts } from '../utils/shirtsApi';

const initialState = {
  isFetchingShirts: false,
  shirtList: [],
};

const useShirts = () => {
  const [shirtsState, shirtsDispatcher] = useReducer(shirtsReducer, initialState);

  // Load shirts from API and fill the internal state
  const loadShirts = useCallback(async () => {
    shirtsDispatcher({
      type: REQUEST_SHIRTS,
    });

    try {
      // Load shirts data from database
      const data = await getShirts();

      shirtsDispatcher({
        type: REQUEST_SHIRTS_SUCCESS,
        response: data,
      });
    } catch (error) {
      shirtsDispatcher({
        type: REQUEST_SHIRTS_FAILURE,
        error,
      });
    }
  }, []);

  useEffect(() => {
    loadShirts();
  }, [loadShirts]);

  // Create a new shirt, add to internal state, post to API
  const createShirt = useCallback(
    (shirt) => {
      // Add the next id number
      const shirtWithId = {
        ...shirt,
        id: shirtsState.shirtList.length + 1,
        description: 'Custom Shirt Design',
      };
      // Insert into database
      postShirt(shirtWithId);
      // Add to state
      shirtsDispatcher({ type: CREATE_SHIRT, shirt: shirtWithId });
    },
    [shirtsState.shirtList.length],
  );

  const updateShirt = useCallback((shirt) => {
    // Update database
    putShirt(shirt);
    // Update state
    shirtsDispatcher({ type: UPDATE_SHIRT, shirt });
  }, []);

  return {
    isFetchingShirts: shirtsState.isFetchingShirts,
    shirtList: shirtsState.shirtList,
    loadShirts,
    createShirt,
    updateShirt,
  };
};

export default useShirts;
