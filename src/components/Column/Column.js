import React, {Component} from 'react';
import AddCard from '../../components/AddCard/AddCard';
import CardModal from '../../components/CardModal/CardModal';

class Column extends Component {
  render() {
    return (
      <div className="list-wrapper list-wrapper--gray">
        <div className="list">
          <header>{this.props.title}</header>
          <ul>
            {this.props.children}
          </ul>
        </div>
        <footer>
          <AddCard />
        </footer>
      </div>
    );
  }
}

export default Column;
