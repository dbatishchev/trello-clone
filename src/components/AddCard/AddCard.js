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

  setTextAreaRef = (textarea) => {
    this.textarea = textarea;
  };

  toggle = () => {
    const isOpened = !this.state.opened;
    this.setState({
      opened: isOpened,
    });
  };

  onClick = (e) => {
    e.preventDefault();
    if (!this.textarea.value.trim()) {
      return
    }

    this.props.onCreate({
      id: '112123123123',
      title: this.textarea.value,
    }, this.props.list);

    this.textarea.value = '';

    this.setState({
      opened: false,
    });
  };

  render() {
    return (
      <div className={`add-card ${this.state.opened ? 'add-card--opened' : ''}`}>
        {this.state.opened ? (
          <div>
            <div className="list-card">
              <div className="list-card-details">
                <textarea
                  className="add-card__textarea"
                  defaultValue=""
                  ref={this.setTextAreaRef}
                />
              </div>
            </div>
            <div className="list-card-details">
              <Button primary onClick={this.onClick}>Save</Button>
              <Icon name='times' onClick={this.toggle}/>
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
