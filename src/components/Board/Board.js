import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragDropContext} from 'react-beautiful-dnd';
import map from 'lodash/map';
import DroppableList from '../List/DroppableList/DroppableList';
import CardContainer from "../../containers/CardContainer";
import AddListContainer from "../../containers/AddListContainer";
import './Board.scss';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

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

    // const sourceListId = result.source.droppableId

    // this.props.onMoveCard()

    // if (!result.destination) {
    //   return;
    // }
    //
    // if (result.destination.droppableId === result.source.droppableId) {
    //   const listId = Number(result.destination.droppableId);
    //   const listIndex = findIndex(db, c => c.id === listId);
    //
    //   db[listIndex] = reorder(
    //     this.state.items[listIndex],
    //     result.source.index,
    //     result.destination.index
    //   );
    // } else {
    //   const sourceListId = Number(result.source.droppableId);
    //   const destinationListId = Number(result.destination.droppableId);
    //   const sourceListIndex = findIndex(db, c => c.id === sourceListId);
    //   const destinationListIndex = findIndex(db, c => c.id === destinationListId);
    //
    //   const sourceListTasks = Array.from(this.state.items[sourceListIndex].tasks);
    //   const movedElement = sourceListTasks[result.source.index];
    //   sourceListTasks.splice(result.source.index, 1);
    //
    //   const destinationListTasks = Array.from(this.state.items[destinationListIndex].tasks);
    //   destinationListTasks.splice(result.destination.index, 0, movedElement);
    //
    //   db[sourceListIndex].tasks = sourceListTasks;
    //   db[destinationListIndex].tasks = destinationListTasks;
    // }
    //
    // this.setState({
    //   items: db,
    // });
  };

  render() {
    const {lists} = this.props.board;
    return (
      <div className="lists">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {map(lists, (l) => {
            return (
              <DroppableList title={l.title} id={l.id} key={l.id}>
                {map(l.cards, c => <CardContainer card={c} index={c.id} key={c.id}/>)}
              </DroppableList>
            );
          })}
        </DragDropContext>
        <AddListContainer/>
      </div>
    );
  }
}
