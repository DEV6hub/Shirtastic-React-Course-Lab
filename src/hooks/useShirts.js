import { useReducer, useCallback, useEffect } from 'react';
import { shirtsReducer } from '../state/reducers';
import {
  REQUEST_SHIRTS,
  REQUEST_SHIRTS_SUCCESS,
  REQUEST_SHIRTS_FAILURE,
} from '../constants/ActionTypes';
import { getShirts } from '../utils/shirtsApi';

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

  return {
    shirtList: shirtsState.shirtList,
  };
};

export default useShirts;
