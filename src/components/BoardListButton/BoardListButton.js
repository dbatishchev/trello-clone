import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'
import './BoardListButton.scss';

export default class BoardListButton extends Component {

  toggle = (e) => {
    e.preventDefault();
    console.log(this.props.isOpened);
    if (this.props.isOpened) {
      this.props.closeDashboard();
    } else {
      this.props.openDashboard();
    }
  };

  render() {
    return (
      <Button primary size="tiny" onClick={this.toggle}>Boards</Button>
    );
  }
}
