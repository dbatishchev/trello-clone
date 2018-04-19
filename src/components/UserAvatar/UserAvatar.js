import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './UserAvatar.scss';

export default class UserAvatar extends Component {

  render() {
    return (
      <div className="user-avatar">
        <img src={this.props.user.avatar} />
      </div>
    );
  }
}
