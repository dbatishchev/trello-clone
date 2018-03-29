import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import BoardPanel from '../../components/BoardPanel/BoardPanel';
import BoardContainer from "../../containers/BoardContainer";

class App extends Component {

  static propTypes = {
    boards: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="App">
        <div className="app-root">
          <nav className="navbar app">
            ololo
            <BoardPanel />
          </nav>
          <nav className="navbar board">{this.props.activeBoard.title}</nav>
          <BoardContainer />
        </div>
      </div>
    );
  }
}

export default App;
