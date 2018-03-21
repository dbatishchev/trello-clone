import React, {Component} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import Column from '../Column/Column';
import DroppableColumn from '../Column/DroppableColumn/DroppableColumn';
import Card from '../Card/Card';
import DraggableCard from '../Card/DraggableCard/DraggableCard';
import './App.scss';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const data = [
  [
    { id: 'a', content: 'a' },
    { id: 'b', content: 'b' },
    { id: 'c', content: 'c' },
    { id: 'd', content: 'd' },
  ],
  [
    { id: 'q', content: 'q' },
    { id: 'w', content: 'w' },
    { id: 'e', content: 'e' },
    { id: 'r', content: 'r' },
  ],
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: data,
    };
  }

  onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.droppableId === result.source.droppableId) {
      const columnId = Number(result.destination.droppableId);
      data[columnId] = reorder(
        this.state.items[columnId],
        result.source.index,
        result.destination.index
      );
    } else {
      const sourceColumnId = Number(result.source.droppableId);
      const destinationColumnId = Number(result.destination.droppableId);

      const sourceColumn = Array.from(this.state.items[sourceColumnId]);
      const movedElement = sourceColumn[result.source.index];
      sourceColumn.splice(result.source.index, 1);

      const destinationColumn = Array.from(this.state.items[destinationColumnId]);
      destinationColumn.splice(result.destination.index, 0, movedElement);

      data[sourceColumnId] = sourceColumn;
      data[destinationColumnId] = destinationColumn;
    }

    this.setState({
      items: data,
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
              <DroppableColumn id={'0'}>
                {this.state.items[0].map((item, index) => (
                  <DraggableCard item={item} index={index}>{item.content}</DraggableCard>
                ))}
              </DroppableColumn>
              <DroppableColumn id={'1'}>
                {this.state.items[1].map((item, index) => (
                  <DraggableCard item={item} index={index}>{item.content}</DraggableCard>
                ))}
              </DroppableColumn>
            </DragDropContext>
            <Column>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet</Card>
              <Card>
                <img src="holder.js/300x150?auto=yes&bg=#ccc" alt=""/>
                Lorem ipsum dolor sit amet
              </Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet metus laoreet, ut condimentum</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet metus laoreet, ut condimentum</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
            </Column>
            <Column>
              <Card>Just some text</Card>
              <Card>Just some text</Card>
            </Column>
            <Column>
              <Card>
                <img src="holder.js/600x400?auto=yes&bg=#ccc" alt=""/>
                Lorem ipsum dolor sit amet, consectetur adipiscing eCardt
              </Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet</Card>
              <Card>
                <img src="holder.js/150x150?auto=yes&bg=#ccc" alt=""/>
                Lorem ipsum dolor sit amet
              </Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet metus laoreet, ut condimentum</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet metus laoreet, ut condimentum</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
            </Column>
            <Column>
              <Card>Just some text</Card>
              <Card>Yet another card</Card>
            </Column>
            <Column>
              <Card>
                <img src="holder.js/150x150?auto=yes&bg=#ccc" alt=""/>
                Lorem ipsum dolor sit amet
              </Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet</Card>
              <Card>
                <img src="holder.js/600x400?auto=yes&bg=#ccc" alt=""/>
                Lorem ipsum dolor sit amet, consectetur adipiscing eCardt
              </Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet metus laoreet, ut condimentum</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet metus laoreet, ut condimentum</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet</Card>
              <Card>Lorem ipsum dolor sit amet</Card>
            </Column>
            <Column>
              <Card>Just some text</Card>
              <Card>Lorem ipsum dolor sit amet, consectetur adipiscing eCardt. Donec lobortis enim sit amet</Card>
              <Card>Some more text</Card>
              <Card>Some more text</Card>
            </Column>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
