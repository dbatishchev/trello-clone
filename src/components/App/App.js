import React, {Component} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import Column from '../Column/Column';
import DroppableColumn from '../Column/DroppableColumn/DroppableColumn';
import Card from '../Card/Card';
import DraggableCard from '../Card/DraggableCard/DraggableCard';
import './App.scss';

// fake data generator
const getItems = count =>
  Array.from({length: count}, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

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
      items: getItems(10),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ui">
          <nav className="navbar app">App bar</nav>
          <nav className="navbar board">Board bar</nav>
          <div className="lists">
            <DragDropContext onDragEnd={this.onDragEnd}>
              <DroppableColumn>
                {this.state.items.map((item, index) => (
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
