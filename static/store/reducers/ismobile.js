import * as actionTypes from '../actions';

const initialState = {
  isMobile: true,
  mobileNav: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_IS_MOBILE:
      return {
        ...state,
        isMobile: action.isMobile,
      };

    case actionTypes.UPDATE_MOBILE_NAV:
      return {
        ...state,
        mobileNav: action.mobileNav,
      };

    default:
      return state;
  }
};

export default reducer;
