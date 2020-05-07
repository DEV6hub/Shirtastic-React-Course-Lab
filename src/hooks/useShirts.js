import { useReducer, useCallback } from 'react';
import { shirtsReducer } from '../state/reducers';
import {
  REQUEST_SHIRTS,
  REQUEST_SHIRTS_SUCCESS,
  REQUEST_SHIRTS_FAILURE,
  CREATE_SHIRT,
  UPDATE_SHIRT,
} from '../constants/ActionTypes';

const initialState = {
  isFetchingShirts: false,
  shirtList: [],
};

const useShirts = () => {
  const [shirtsState, shirtsDispatcher] = useReducer(shirtsReducer, initialState);

  const fetchShirts = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:9001/shirts');
      const data = await response.json();
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

  const postShirts = useCallback(async (shirtList) => {
    await fetch('http://localhost:9001/shirts', {
      method: 'POST',
      body: JSON.stringify(shirtList),
    });
  }, []);

  const loadShirts = useCallback(() => {
    shirtsDispatcher({
      type: REQUEST_SHIRTS,
    });
    fetchShirts();
  }, [fetchShirts]);

  const createShirt = useCallback(
    (shirt) => {
      shirtsDispatcher({ type: CREATE_SHIRT, shirt });
      postShirts();
    },
    [postShirts],
  );

  const updateShirt = useCallback((shirt) => {
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
