import React, {Component} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import findIndex from 'lodash/findIndex';
import DroppableColumn from '../Column/DroppableColumn/DroppableColumn';
import DraggableCard from '../Card/DraggableCard/DraggableCard';
import './App.scss';

const db = [
  {
    id: 1,
    title: 'First Column',
    tasks: [
      {
        id: 1,
        content: '111',
      },
      {
        id: 2,
        content: '222',
      },
      {
        id: 3,
        content: '333',
      },
    ]
  },
  {
    id: 2,
    title: 'Second Column',
    tasks: [
      {
        id: 4,
        content: '444'
      },
      {
        id: 5,
        content: '555'
      },
      {
        id: 6,
        content: '666'
      },
    ]
  },
  {
    id: 3,
    title: 'Third Column',
    tasks: [
      {
        id: 7,
        content: '777'
      },
      {
        id: 8,
        content: '888'
      },
    ]
  },
];

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: db,
    };
  }

  onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.droppableId === result.source.droppableId) {
      const columnId = Number(result.destination.droppableId);
      const columnIndex = findIndex(db, c => c.id === columnId);

      db[columnIndex] = reorder(
        this.state.items[columnIndex],
        result.source.index,
        result.destination.index
      );
    } else {
      const sourceColumnId = Number(result.source.droppableId);
      const destinationColumnId = Number(result.destination.droppableId);
      const sourceColumnIndex = findIndex(db, c => c.id === sourceColumnId);
      const destinationColumnIndex = findIndex(db, c => c.id === destinationColumnId);

      const sourceColumnTasks = Array.from(this.state.items[sourceColumnIndex].tasks);
      const movedElement = sourceColumnTasks[result.source.index];
      sourceColumnTasks.splice(result.source.index, 1);

      const destinationColumnTasks = Array.from(this.state.items[destinationColumnIndex].tasks);
      destinationColumnTasks.splice(result.destination.index, 0, movedElement);

      db[sourceColumnIndex].tasks = sourceColumnTasks;
      db[destinationColumnIndex].tasks = destinationColumnTasks;
    }

    this.setState({
      items: db,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="ui">
          <nav className="navbar app">App bar</nav>
          <nav className="navbar board">Board bar</nav>
          <div className="lists">
            <DragDropContext onDragEnd={this.onDragEnd}>
              { this.state.items.map((col) => {
                return (
                  <DroppableColumn id={col.id} title={col.title} key={col.id}>
                    {col.tasks.map((item, index) => (
                      <DraggableCard item={item} index={index} key={item.id}>{item.content}</DraggableCard>
                    ))}
                  </DroppableColumn>
                );
              })}
            </DragDropContext>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
