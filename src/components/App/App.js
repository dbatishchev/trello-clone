import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BoardListButton from '../../components/BoardListButton/BoardListButton';
import BoardPanel from '../../components/BoardPanel/BoardPanel';
import BoardContainer from "../../containers/BoardContainer";
import CardModalContainer from "../../containers/CardModalContainer";
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

class App extends Component {

  static propTypes = {
    boards: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="App">
        <div className="app-root">
          <nav className="navbar app">
            <BoardListButton />
            <BoardPanel />
          </nav>
          <nav className="navbar board">{this.props.activeBoard.title}</nav>
          <BoardContainer />
          <CardModalContainer />
        </div>
      </div>
    );
  }
}

export default App;
