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
      1: {id: 1, title: 'test board 1'},
      2: {id: 2, title: 'test board 2'},
      3: {id: 3, title: 'test board 3'},
      4: {id: 4, title: 'test board 4'},
    },
    boardsDetailsById: {
      1: {
        description: 'test description',
        lists: [1, 2]
      },
      2: {},
      3: {},
      4: {},
    },
    listsById: {
      1: {
        id: 1,
        title: 'Second List',
        cards: [1, 2, 3],
      },
      2: {
        id: 2,
        title: 'Second List',
        cards: [4, 5, 6],
      }
    },
    cardsById: {
      1: {id: 1, title: '1', content: '111'},
      2: {id: 2, title: '2', content: '222'},
      3: {id: 3, title: '3', content: '333'},
      4: {id: 4, title: '4', content: '444'},
      5: {id: 5, title: '5', content: '555'},
      6: {id: 6, title: '6', content: '666'},
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
