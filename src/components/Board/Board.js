import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragDropContext} from 'react-beautiful-dnd';
import findIndex from 'lodash/findIndex';
import DroppableColumn from '../Column/DroppableColumn/DroppableColumn';
import DraggableCard from '../Card/DraggableCard/DraggableCard';
import AddList from '../AddList/AddList';
import './Board.scss';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class Board extends Component {

  static propTypes = {
    board: PropTypes.object.isRequired,
  };

  // onDragEnd = (result) => {
  //   if (!result.destination) {
  //     return;
  //   }
  //
  //   if (result.destination.droppableId === result.source.droppableId) {
  //     const columnId = Number(result.destination.droppableId);
  //     const columnIndex = findIndex(db, c => c.id === columnId);
  //
  //     db[columnIndex] = reorder(
  //       this.state.items[columnIndex],
  //       result.source.index,
  //       result.destination.index
  //     );
  //   } else {
  //     const sourceColumnId = Number(result.source.droppableId);
  //     const destinationColumnId = Number(result.destination.droppableId);
  //     const sourceColumnIndex = findIndex(db, c => c.id === sourceColumnId);
  //     const destinationColumnIndex = findIndex(db, c => c.id === destinationColumnId);
  //
  //     const sourceColumnTasks = Array.from(this.state.items[sourceColumnIndex].tasks);
  //     const movedElement = sourceColumnTasks[result.source.index];
  //     sourceColumnTasks.splice(result.source.index, 1);
  //
  //     const destinationColumnTasks = Array.from(this.state.items[destinationColumnIndex].tasks);
  //     destinationColumnTasks.splice(result.destination.index, 0, movedElement);
  //
  //     db[sourceColumnIndex].tasks = sourceColumnTasks;
  //     db[destinationColumnIndex].tasks = destinationColumnTasks;
  //   }
  //
  //   this.setState({
  //     items: db,
  //   });
  // };

  render() {
    return (
      <div className="lists">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.props.board.columns.map((col) => {
            return (
              <DroppableColumn id={col.id} title={col.title} key={col.id}>
                {col.tasks.map((item, index) => (
                  <DraggableCard item={item} index={index} key={item.id}>{item.content}</DraggableCard>
                ))}
              </DroppableColumn>
            );
          })}
        </DragDropContext>
        <AddList/>
      </div>
    );
  }
}

export default Board;
