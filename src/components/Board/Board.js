import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragDropContext} from 'react-beautiful-dnd';
import map from 'lodash/map';
import DroppableList from '../List/DroppableList/DroppableList';
import CardContainer from "../../containers/CardContainer";
import AddListContainer from "../../containers/AddListContainer";
import './Board.scss';

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

    this.props.onMoveCard(Number(cardId), Number(sourceListId), Number(destinationListId), Number(sourceIndex), Number(destinationIndex));
  };

  render() {
    const {lists} = this.props.board;

    return (
      <div className="lists">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {map(lists, (l) => {
            return (
              <DroppableList title={l.title} id={`${l.id}`} key={`${l.id}`}>
                {map(l.cards, c => <CardContainer card={c} index={`${c.id}`} key={`${c.id}`}/>)}
              </DroppableList>
            );
          })}
        </DragDropContext>
        <AddListContainer/>
      </div>
    );
  }
}
