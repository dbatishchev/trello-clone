import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react'
import shortid from 'shortid';
import './AddList.scss';

class AddList extends Component {

  constructor() {
    super();

    this.state = {
      opened: false,
    }
  }

  setInputRef = (input) => {
    this.input = input;
  };

  toggle = () => {
    const isOpened = !this.state.opened;
    this.setState({
      opened: isOpened,
    }, () => {
      if (isOpened) {
        this.input.focus();
      }
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return
    }

    this.props.onCreate({
      id: shortid.generate(),
      title: this.input.value,
      cards: [],
    });

    this.input.value = '';

    this.setState({
      opened: false,
    });
  };

  render() {
    return (
      <div className="list-wrapper">
        <div className={`add-list ${this.state.opened === true ? 'add-list--opened' : 'add-list--closed'}`}>
          <form onSubmit={this.onSubmit}>
            <span className="placeholder" onClick={this.toggle}>Add a list…</span>
            <input
              className="list-name-input"
              type="text"
              name="name"
              placeholder="Add a list…"
              autoComplete="off"
              dir="auto"
              maxLength="512"
              ref={this.setInputRef}
            />
            <div className="list-add-controls u-clearfix">
              <Button primary>Save</Button>
              <Icon name='times' onClick={this.toggle} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddList;
