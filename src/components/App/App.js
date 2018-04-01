import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BoardContainer from "../../containers/BoardContainer";
import CardModalContainer from "../../containers/CardModalContainer";
import './App.scss';
import DashboardContainer from "../../containers/DashboardContainer";
import BoardListButtonContainer from "../../containers/BoardListButtonContainer";

class App extends Component {
  render() {
    return (
      <div className={`app ${this.props.isDashboardPinned ? 'app--pinned' : ''}`}>
        <div className="app-root">
          <nav className="navbar app">
            <BoardListButtonContainer />
            <DashboardContainer />
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
