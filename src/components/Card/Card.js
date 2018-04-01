import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export default class Card extends Component {

  static propTypes = {
    card: PropTypes.object.isRequired,
    openCardModal: PropTypes.func.isRequired,
  };

  openModal = () => {
    this.props.openCardModal(this.props.card);
  };

  render() {
    return (
      <div className="card" onClick={this.openModal}>
        {this.props.card.content}
      </div>
    );
  }
}
