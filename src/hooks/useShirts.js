import { useReducer } from 'react';
import { shirtsReducer } from '../state/reducers';

const initialState = {
  isFetchingShirts: false,
  shirtList: [],
};

const useShirts = () => {
  const [shirtsState, shirtsDispatcher] = useReducer(shirtsReducer, initialState);

  return [shirtsState, shirtsDispatcher];
};

export default useShirts;
