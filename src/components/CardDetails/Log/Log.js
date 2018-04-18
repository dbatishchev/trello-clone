import React, {Component} from 'react'
import PropTypes from 'prop-types';
import map from 'lodash/map';
import LogItem from './LogItem/LogItem';
import './Log.scss';

export default class Log extends Component {

  // todo
  // static propTypes = {
  //   items: PropTypes.obj3ect,
  // };

  render() {
    if (!this.props.items || this.props.items.length === 0) {
      return null;
    }

    return (
      <div className="log-items">
        {map(this.props.items, i => (
          <LogItem item={i} />
        ))}
      </div>
    );
  }
}
