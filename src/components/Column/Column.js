import React, {Component} from 'react';

class Column extends Component {
  render() {
    return (
      <div className="list">
        <header>List header</header>
        <ul>
          {this.props.children}
        </ul>
        <footer>Add a card...</footer>
      </div>
    );
  }
}

export default Column;
