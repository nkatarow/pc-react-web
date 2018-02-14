import * as actionTypes from '../actions';

const initialState = {
  dimensions: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DIMENSIONS:
      return {
        ...state,
        dimensions: {
          width: action.width,
          height: action.height,
        },
      };

    default:
      return state;
  }
};

export default reducer;
