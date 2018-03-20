import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import Card from '../Card';

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  marginBottom: '8px',
  ...draggableStyle,
});


class DraggableCard extends Component {
  render() {
    return (
      <Draggable key={this.props.item.id} draggableId={this.props.item.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              <Card>
                {this.props.children}
              </Card>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }
}

export default DraggableCard;
