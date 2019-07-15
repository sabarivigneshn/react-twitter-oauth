import { combineReducers } from 'redux';
import AppReducer from './AppReducer'

const appReducer = combineReducers({
  AppReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return appReducer(state, action)
}

export default rootReducer;
