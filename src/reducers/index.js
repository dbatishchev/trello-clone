import { combineReducers } from 'redux'
import columns from './columns'
import boards from './boards'
import dashboard from "./dashboard";

export default combineReducers({
  boards,
  columns,
  dashboard,
});
