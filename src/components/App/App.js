import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BoardListButton from '../../components/BoardListButton/BoardListButton';
import BoardPanel from '../Dashboard/Dashboard';
import BoardContainer from "../../containers/BoardContainer";
import CardModalContainer from "../../containers/CardModalContainer";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app app--pinned">
        <div className="app-root">
          <nav className="navbar app">
            <BoardListButton />
            <BoardPanel />
          </nav>
          <nav className="navbar board">{this.props.selectedBoard.title}</nav>
          <BoardContainer board={this.props.selectedBoard} />
          <CardModalContainer />
        </div>
      </div>
    );
  }
}

export default App;
