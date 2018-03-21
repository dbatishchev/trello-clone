import React, {Component} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Column from '../Column/Column';
import './Board.scss';

class Board extends Component {
  render() {
    return (
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={Boolean(containerHeight)}
      >
        {(provided) => (
          <div innerRef={provided.innerRef} {...provided.droppableProps}>
            {ordered.map((key, index) => (
              <Column
                key={key}
                index={index}
                title={key}
                quotes={columns[key]}
                autoFocusQuoteId={this.state.autoFocusQuoteId}
              />
            ))}
          </div>
        )}
      </Droppable>
      // <div className="card">
      //   {this.props.children}
      // </div>
    );
  }
}

export default Board;
