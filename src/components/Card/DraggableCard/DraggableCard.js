import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import Card from "../Card";

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  marginBottom: '8px',
  ...draggableStyle,
});

export default class DraggableCard extends Component {
  render() {
    return (
      <Draggable key={this.props.card.id} draggableId={this.props.card.id} index={this.props.index}>
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
              <Card card={this.props.card} openCardModal={this.props.openCardModal} />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }
}
