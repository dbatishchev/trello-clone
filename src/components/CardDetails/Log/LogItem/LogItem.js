import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './LogItem.scss';
import UserAvatar from '../../../../components/UserAvatar/UserAvatar';

export default class LogItem extends Component {

  static propTypes = {
    item: PropTypes.object,
  };

  render() {
    if (!this.props.item) {
      return null;
    }

    return (
      <div className="phenom mod-attachment-type">
        {this.props.item.author && (
          <div className="phenom-creator">
            <div className="member js-show-mem-menu">
              <UserAvatar user={this.props.item.author} />
            </div>
          </div>
        )}
        <div className="phenom-desc"><span className="inline-member js-show-mem-menu"><span
          className="u-font-weight-bold">Dimitry Batishchev</span></span> added
          this card to На будущее
        </div>
        <p className="phenom-meta quiet">
          <a
            className="date js-hide-on-sending js-highlight-link"
            href="/c/nVyUIFdC/30-tame-impala-elephant#action-55885fb3e6703b7240d0cc4f"
            title="June 22, 2015 10:19 PM">Jun 22, 2015 at 10:19 PM
          </a>
        </p>
      </div>
    );
  }
}
