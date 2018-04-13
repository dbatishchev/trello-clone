import { combineReducers } from 'redux'
import lists from './lists'
import boards from './boards'
import dashboard from "./dashboard";

export default combineReducers({
  boards,
  lists,
  dashboard,
});
