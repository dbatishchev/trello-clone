import React, {Component} from 'react';
import CardModal from '../../components/CardModal/CardModal';

class Column extends Component {
  render() {
    return (
      <div className="list list--gray">
        <header>{this.props.title}</header>
        <ul>
          {this.props.children}
        </ul>
        <footer>
          Add a card...
        </footer>
      </div>
    );
  }
}

export default Column;
