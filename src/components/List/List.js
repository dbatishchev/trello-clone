import React, {Component} from 'react';
import ListHeader from '../../components/ListHeader/ListHeader';
import AddCard from '../../components/AddCard/AddCard';

class List extends Component {
  render() {
    return (
      <div className="list-wrapper list-wrapper--gray">
        <div className="list">
          <ListHeader />
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

export default List;
