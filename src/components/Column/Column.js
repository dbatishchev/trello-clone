import React, {Component} from 'react';

class Column extends Component {
  render() {
    return (
      <div className="list">
        <header>{this.props.title}</header>
        <ul>
          {this.props.children}
        </ul>
        <footer>Add a card...</footer>
      </div>
    );
  }
}

export default Column;
