import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from "./containers/AppContainer";

const store = createStore(rootReducer, {
  boards: {
    boardsById: {
      1: {title: 'test board 1'},
      2: {title: 'test board 2'},
      3: {title: 'test board 3'},
      4: {title: 'test board 4'},
    },
    boardsDetailsById: {
      1: {
        description: 'test description',
        columns: [1, 2]
      },
      2: {},
      3: {},
      4: {},
    },
    columnsById: {
      1: {
        title: 'Second Column',
        cards: [1, 2, 3],
      },
      2: {
        title: 'Second Column',
        cards: [3, 4, 5],
      }
    },
    cardsById: {
      1: {title: '1', content: '111'},
      2: {title: '2', content: '222'},
      3: {title: '3', content: '333'},
      4: {title: '4', content: '444'},
      5: {title: '5', content: '555'},
      6: {title: '6', content: '666'},
    },
    selectedBoardId: 1,
    selectedCardId: 0,
    isCardModalOpened: false,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
