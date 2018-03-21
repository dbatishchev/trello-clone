import React, {Component} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Column from '../Column';

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
});

class DroppableColumn extends Component {
  render() {
    return (
      <Droppable droppableId={this.props.id}>
        {(provided, snapshot) => (
          <div>
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              <Column>
                {this.props.children}
                {provided.placeholder}
              </Column>
            </div>
          </div>
        )}
      </Droppable>
    );
  }
}

export default DroppableColumn;
