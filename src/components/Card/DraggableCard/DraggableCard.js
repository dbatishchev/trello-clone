import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import Card from "../Card";

export default class DraggableCard extends Component {
  render() {
    return (
      <Draggable key={`${this.props.card.id}`} draggableId={`${this.props.card.id}`} index={`${this.props.card.id}`}>
        {(provided) => (
          <div>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                ...provided.draggableProps.style,
                marginBottom: '10px',
              }}
            >
              <Card card={this.props.card} openCardModal={this.props.openCardModal}/>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }
}
