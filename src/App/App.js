import React, {Component} from 'react';
import Column from '../Column/Column';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui">
          <nav className="navbar app">App bar</nav>
          <nav className="navbar board">Board bar</nav>
          <div className="lists">
            <Column>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
            </Column>
            <Column>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>
                <img src="holder.js/300x150?auto=yes&bg=#ccc" alt=""/>
                Lorem ipsum dolor sit amet
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </Column>
            <Column>
              <li>Just some text</li>
              <li>Just some text</li>
            </Column>
            <Column>
              <li>
                <img src="holder.js/600x400?auto=yes&bg=#ccc" alt=""/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>
                <img src="holder.js/150x150?auto=yes&bg=#ccc" alt=""/>
                Lorem ipsum dolor sit amet
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </Column>
            <Column>
              <li>Just some text</li>
              <li>Yet another card</li>
            </Column>
            <Column>
              <li>
                <img src="holder.js/150x150?auto=yes&bg=#ccc" alt=""/>
                Lorem ipsum dolor sit amet
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>
                <img src="holder.js/600x400?auto=yes&bg=#ccc" alt=""/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </Column>
            <Column>
              <li>Just some text</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Some more text</li>
              <li>Some more text</li>
            </Column>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
