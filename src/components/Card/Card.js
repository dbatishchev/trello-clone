import React, {Component} from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    return (
      <div className="card" onClick={() => {console.log('!!!');}}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
