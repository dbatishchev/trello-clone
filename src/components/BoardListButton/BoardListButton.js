import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './BoardListButton.scss';

export default class BoardListButton extends Component {
  render() {
    return (
      <Button primary size="tiny">Boards</Button>
    );
  }
}
