import React, {Component} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import AddCardContainer from '../../containers/AddCardContainer';
import ListHeaderContainer from '../../containers/ListHeaderContainer';
import CardContainer from "../../containers/CardContainer";
import AddListContainer from "../../containers/AddListContainer";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import './Board.scss';

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  margin: `0 0 10px 0`,
  ...draggableStyle,
});

export default class Board extends Component {

  static propTypes = {
    board: PropTypes.object.isRequired,
  };

  onDragEnd = (result) => {
    const cardId = result.draggableId;
    const sourceListId = result.source.droppableId;
    const sourceIndex = result.source.index;
    const destinationListId = result.destination.droppableId;
    const destinationIndex = result.destination.index;

    this.props.onMoveCard(cardId, sourceListId, destinationListId, sourceIndex, destinationIndex);
  };

  render() {
    const {lists} = this.props.board;

    return (
      <div className="lists">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {map(lists, (l) => {
            return (
              <div key={l.id}>
                <div className="list-wrapper list-wrapper--gray">
                  <div className="list">
                    <ListHeaderContainer list={l}/>
                    <Droppable droppableId={l.id} key={l.id}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                        >
                          {map(l.cards, (c, index) => (
                            <Draggable key={c.id} draggableId={c.id} index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                  )}
                                >
                                  <CardContainer card={c}/>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                  <footer>
                    <AddCardContainer list={l}/>
                  </footer>
                </div>
              </div>
            );
          })}
        </DragDropContext>
        <AddListContainer/>
      </div>
    );
  }
}
