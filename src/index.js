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
      1: {
        id: 1,
        title: 'Lorem ipsum dolor',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla sodales nibh, ac dignissim sem malesuada a. Nullam porttitor tortor vel malesuada consectetur. Praesent tempus ornare ligula sed commodo. Ut quis luctus lacus. Vivamus pretium turpis quam, quis sagittis erat tempor et. Ut elementum nunc eget pellentesque accumsan.',
        assignees: [1]
      },
      2: {
        id: 2,
        title: 'Class aptent',
        content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum tincidunt efficitur aliquet. Aenean at hendrerit neque, non tempus sapien.',
        image: 'https://picsum.photos/300/100',
        assignees: [1, 2]
      },
      3: {
        id: 3,
        title: 'Mauris odio',
        content: 'Mauris odio arcu, consequat ut lobortis in, venenatis et neque. Aliquam elit dolor, ullamcorper quis dignissim vel, rhoncus a elit. Vivamus lacinia aliquam diam, consequat venenatis lorem porttitor et. Ut ac neque iaculis orci finibus dictum vitae eu erat. Maecenas ac venenatis lorem, eu aliquam orci. Praesent quis leo eros. Aenean facilisis semper elit vitae suscipit. Mauris tincidunt vestibulum molestie. Proin lorem dolor, finibus vitae blandit nec, venenatis vel lacus. Mauris in finibus turpis.',
        assignees: [1]
      },
      4: {id: 4, title: 'Sed at pellentesque', content: 'Sed at pellentesque nibh.', image: 'https://picsum.photos/400/200', assignees: [2], tags: [1, 2]},
      5: {id: 5, title: 'Cras sed nulla vitae lorem', content: 'Cras sed nulla vitae lorem sagittis sodales eu sit amet lectus', assignees: [1], tags: [1]},
      6: {
        id: 6,
        title: 'Mauris odio arcu',
        content: 'Mauris odio arcu, consequat ut lobortis in, venenatis et neque. Aliquam elit dolor, ullamcorper quis dignissim vel, rhoncus a elit. Vivamus lacinia aliquam diam, consequat venenatis lorem porttitor et. Ut ac neque iaculis orci finibus dictum vitae eu erat. Maecenas ac venenatis lorem, eu aliquam orci.',
        assignees: [1, 2],
        logs: [1, 2],
      },
    },
    users: {
      1: {id: 1, username: 'First', avatar: 'https://68.media.tumblr.com/avatar_1f7bdbbeb59c_128.png'},
      2: {id: 2, username: 'Second', avatar: 'https://68.media.tumblr.com/avatar_09404f3287c6_128.png'},
    },
    tags: {
      1: {id: 1, title: 'Mauris odio arcu', color: 'green'},
      2: {id: 2, title: 'Class aptent', color: 'red'},
    },
    logs: {
      1: {id: 1},
      2: {id: 2},
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
