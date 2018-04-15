import React, {Component} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import List from '../List';

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
});

class DroppableList extends Component {
  render() {
    return (
      <Droppable droppableId={`${this.props.id}`}>
        {(provided, snapshot) => (
          <div>
            <div
              ref={provided.innerRef}
              // style={getListStyle(snapshot.isDraggingOver)}
            >
              <List title={this.props.title}>
                {this.props.children}
                {provided.placeholder}
              </List>
            </div>
          </div>
        )}
      </Droppable>
    );
  }
}

export default DroppableList;
