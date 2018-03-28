import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react'
import './AddCard.scss';

class AddCard extends Component {

  constructor() {
    super();

    this.state = {
      opened: false,
    }
  }

  toggle = () => {
    const isOpened = !this.state.opened;
    this.setState({
      opened: isOpened,
    });
  };

  render() {
    return (
      <div>
        <div className={`list-card js-composer ${this.state.opened ? 'list-card--opened' : ''}`}>
          <div className="list-card-details">
            <textarea className="list-card-composer-textarea" />
          </div>
        </div>
        <div className={`list-card-details ${this.state.opened ? 'list-card--opened' : ''}`}>
          <Button primary>Save</Button>
          <Icon name='times' onClick={this.toggle} />
        </div>
        <div className={`open-card-composer ${this.state.opened ? 'open-card-composer--closed' : ''}`} onClick={this.toggle}>Add a card…</div>
      </div>
    );
  }
}

export default AddCard;
