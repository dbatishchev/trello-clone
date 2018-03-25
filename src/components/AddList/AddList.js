import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './AddList.scss';

class AddList extends Component {
  render() {
    return (
      <div className="list is-idle">
        <div className="add-list">
          <form>
            <span className="placeholder js-open-add-list">Add a list…</span>
            <input
              className="list-name-input"
              type="text"
              name="name"
              placeholder="Add a list…"
              autoComplete="off"
              dir="auto" maxLength="512"/>
            <div className="list-add-controls u-clearfix">
              <Button primary>Save</Button>
              <Icon name='times' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddList;
