import React, {Component} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Column from '../Column';

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
});

class DroppableColumn extends Component {
  render() {
    return (
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <Column>{this.props.children}</Column>
          </div>
        )}
      </Droppable>
    );
  }
}

export default DroppableColumn;
