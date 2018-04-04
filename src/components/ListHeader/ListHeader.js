import React, {Component} from 'react';
import './ListHeader.scss';

export default class ListHeader extends Component {
  render() {
    return (
      <div className="list-header js-list-header u-clearfix is-menu-shown">
        <textarea
          className="list-header-name mod-list-name js-list-name-input"
          aria-label="Приостановлены" spellCheck="false" dir="auto"
          maxLength="512"
          >Приостановлены</textarea>
      </div>
    );
  }
}
