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
      <div className={`add-card ${this.state.opened ? 'add-card--opened' : ''}`}>
        { this.state.opened ? (
          <div>
            <div className="list-card js-composer">
              <div className="list-card-details">
                <textarea className="add-card__textarea" />
              </div>
            </div>
            <div className="list-card-details">
              <Button primary>Save</Button>
              <Icon name='times' onClick={this.toggle} />
            </div>
          </div>
        ) : (
          <div className="open-card-composer" onClick={this.toggle}>Add a card…</div>
        )}
      </div>
    );
  }
}

export default AddCard;
