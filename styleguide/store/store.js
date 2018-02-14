import { createStore, combineReducers } from 'redux';
import dimensionsReducer from './reducers/dimensions';
import ismobileReducer from './reducers/ismobile';

const reducer = combineReducers({
  screensize: dimensionsReducer,
  mobilestate: ismobileReducer,
});

const store = createStore(reducer);

export default store;
