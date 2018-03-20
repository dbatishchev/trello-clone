import React, {Component} from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}

export default Card;
