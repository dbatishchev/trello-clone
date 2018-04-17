import React, {Component} from 'react';
import './ListHeader.scss';

export default class ListHeader extends Component {
  onChange = (e) => {
    e.preventDefault();

    this.props.onChange(e);
  };

  render() {
    return (
      <div className="list-header js-list-header u-clearfix is-menu-shown">
        <textarea
          className="list-header-name mod-list-name js-list-name-input"
          aria-label="Приостановлены" spellCheck="false" dir="auto"
          maxLength="512"
          value={this.props.list.title}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
