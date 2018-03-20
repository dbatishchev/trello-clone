import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
