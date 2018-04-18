import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Log from './Log/Log';
import './CardDetails.scss';

export default class CardDetails extends Component {

  static propTypes = {
    card: PropTypes.object,
  };

  render() {
    if (!this.props.card) {
      return null;
    }

    return (
      <div className="card-detail">

        <div className="card-detail__data">
          <div className="card-detail__members">

          </div>
          <div className="card-detail__tags">

          </div>
        </div>

        <div className="card-detail__log">
          <Log items={this.props.card.logs} />
        </div>
      </div>
    );
  }
}
