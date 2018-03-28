import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from "./containers/AppContainer";
import boardsInitialData from "./data/boards";

const store = createStore(rootReducer, {
  boards: {
    boardList: boardsInitialData,
    activeBoard: boardsInitialData[0],
  }
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
