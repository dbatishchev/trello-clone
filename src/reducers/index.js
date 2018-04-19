import {combineReducers} from 'redux'
import lists from './lists'
import boards from './boards'
import dashboard from "./dashboard";
import {routerReducer} from 'react-router-redux'

export default combineReducers({
  boards,
  lists,
  dashboard,
  router: routerReducer,
});
