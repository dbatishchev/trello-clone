import React, {Component} from 'react';
import map from 'lodash/map';
import './Dashboard.scss';

export default class Dashboard extends Component {

  pin = (e) => {
    e.preventDefault();
    this.props.pinDashboard();
  };

  unpin = (e) => {
    e.preventDefault();
    this.props.unpinDashboard();
  };

  render() {
    return (
      <div className={`boards-drawer ${this.props.isOpened ? 'is-shown' : ''} ${this.props.isPinned ? 'boards-drawer-pinned' : ''}`}>
        <div className="board-drawer-content u-fancy-scrollbar"><input className="js-search-boards" type="text" placeholder="Find boards by name…"/>
          <div className="js-board-drawer-boards">
            <div>
              <div className="js-recent-boards">
                <div>
                  <div className="sidebar-section-header quiet js-sidebar-section-header bold">
                    <span className="sidebar-section-header-title">Recent Boards</span>
                  </div>
                  <div className="js-section-content">
                    <ul className="sidebar-boards-list js-board-list">
                      {map(this.props.boards, board => (
                        <li className="compact-board-tile" key={board.id}>
                          <div className="compact-board-tile-wrapper">
                            <span className="compact-board-tile-background" />
                            <span className="compact-board-tile-fade" />
                            <a className="js-open-board compact-board-tile-link dark" href="/b/rME98TvM/%D0%B4%D0%B5%D0%BB%D0%B0">
                              <span className="compact-board-tile-link-thumbnail" />
                              <span className="compact-board-tile-link-text details">
                              <span className="compact-board-tile-link-text-name">{board.title}</span>
                            </span>
                              <span className="compact-board-tile-link-options">
                              <span className="compact-board-tile-link-options-unread js-unread" title="There is new activity on this board." />
                              <span className="icon-sm icon-close js-remove-board compact-board-tile-link-options-remove"
                                    title="Click to remove this board from your recent boards." />
                              <span className="icon-sm icon-star compact-board-tile-link-options-star js-star-board"
                                    title="Click to star this board. It will show up at top of your boards list." />
                            </span>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="js-board-drawer-buttons">
            <div>
              <a className="quiet-button js-add-board" href="#">Create new board…</a>
              {this.props.isPinned ? (
                <a className="quiet-button hide js-unpin" href="#" onClick={this.unpin}>Don’t keep this menu open.</a>
              ) : (
                <a className="quiet-button js-pin" href="#" onClick={this.pin}>Always keep this menu open.</a>
              )}
              <a className="quiet-button js-open-closed-boards" href="#">See closed boards…</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
