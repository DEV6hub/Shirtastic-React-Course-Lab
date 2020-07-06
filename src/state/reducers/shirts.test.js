import reducer from './shirtsReducer';
import * as types from '../../constants/ActionTypes';
import initialShirt from '../../constants/initialShirt';

describe('shirts reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      isFetchingShirts: false,
      shirtList: [],
    };
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle CREATE_SHIRT', () => {
    const initialState = {
      isFetchingShirts: false,
      shirtList: [],
    };

    const expectedState = {
      isFetchingShirts: false,
      shirtList: [initialShirt],
    };
    expect(reducer(initialState, { type: types.CREATE_SHIRT, shirt: initialShirt })).toEqual(
      expectedState,
    );
  });

  it('should handle UPDATE_SHIRT', () => {
    const shirt1 = initialShirt;
    const shirt2 = initialShirt;

    shirt1.id = 1;
    shirt2.id = 2;

    const initialState = {
      isFetchingShirts: false,
      shirtList: [{ ...shirt1 }, { ...shirt2 }],
    };

    shirt2.name = 'test-name';

    const expectedState = {
      isFetchingShirts: false,
      shirtList: [{ ...shirt1 }, { ...shirt2 }],
    };

    expect(reducer(initialState, { type: types.UPDATE_SHIRT, shirt: shirt2 })).toEqual(
      expectedState,
    );
  });
});
