import { combineReducers } from 'redux'
import tasks from './tasks'
import columns from './columns'
import boards from './boards'

export default combineReducers({
  boards,
  tasks,
  columns,
});
