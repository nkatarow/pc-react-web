import * as actionTypes from '../actions';

const initialState = {
  isMobile: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_IS_MOBILE:
      return {
        ...state,
        isMobile: action.isMobile,
      };

    default:
      return state;
  }
};

export default reducer;
