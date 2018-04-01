import React, {Component} from 'react';
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
                      <li className="compact-board-tile">
                        <div className="compact-board-tile-wrapper">
                          <span className="compact-board-tile-background" />
                          <span className="compact-board-tile-fade" />
                          <a className="js-open-board compact-board-tile-link dark" href="/b/rME98TvM/%D0%B4%D0%B5%D0%BB%D0%B0">
                            <span className="compact-board-tile-link-thumbnail" />
                            <span className="compact-board-tile-link-text details">
                              <span className="compact-board-tile-link-text-name" title="Дела">Дела</span>
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
                      <li className="compact-board-tile">
                        <div className="compact-board-tile-wrapper">
                          <span className="compact-board-tile-background" />
                          <span className="compact-board-tile-fade" />
                            <a className="js-open-board compact-board-tile-link dark" href="/b/70dtwYYB/ololo-board">
                              <span className="compact-board-tile-link-thumbnail" />
                              <span className="compact-board-tile-link-text details has-sub-name">
                                <span className="compact-board-tile-link-text-name" title="Ololo board">Ololo board</span>
                                <span className="compact-board-tile-link-text-sub-name" title="Cutwise team">Cutwise team</span>
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
                    </ul>
                  </div>
                </div>
              </div>
              <div className="js-all-boards">
                <div className="">
                  <div className="sidebar-section-header quiet js-sidebar-section-header bold"><span className="icon-sm icon-board sidebar-section-header-icon"></span><span
                    className="sidebar-section-header-title">Personal Boards</span><span
                    className="icon-sm icon-remove sidebar-section-header-toggle-icon dark-hover js-collapse-section"></span><span
                    className="icon-sm icon-add sidebar-section-header-toggle-icon dark-hover js-expand-section hide"></span></div>
                  <div className="js-section-content">
                    <div className="js-starred-empty-state sidebar-starred-boards-empty-state hide"></div>
                    <ul className="sidebar-boards-list js-board-list">
                      <li className="compact-board-tile">
                        <div className="compact-board-tile-wrapper"><span className="compact-board-tile-background"></span><span
                          className="compact-board-tile-fade"></span><a className="js-open-board compact-board-tile-link dark" href="/b/vW0Qrc2T/%D0%B4%D0%B5%D0%BB%D0%B0"><span
                          className="compact-board-tile-link-thumbnail"></span><span className="compact-board-tile-link-text details"><span
                          className="compact-board-tile-link-text-name" title="Дела">Дела</span></span><span className="compact-board-tile-link-options"><span
                          className="compact-board-tile-link-options-unread js-unread" title="There is new activity on this board."></span><span
                          className="icon-sm icon-star compact-board-tile-link-options-star js-star-board"
                          title="Click to star this board. It will show up at top of your boards list."></span></span></a></div>
                      </li>
                      <li className="compact-board-tile">
                        <div className="compact-board-tile-wrapper"><span className="compact-board-tile-background"></span><span
                          className="compact-board-tile-fade"></span><a className="js-open-board compact-board-tile-link dark" href="/b/rME98TvM/%D0%B4%D0%B5%D0%BB%D0%B0"><span
                          className="compact-board-tile-link-thumbnail"></span><span className="compact-board-tile-link-text details"><span
                          className="compact-board-tile-link-text-name" title="Дела">Дела</span></span><span className="compact-board-tile-link-options"><span
                          className="compact-board-tile-link-options-unread js-unread" title="There is new activity on this board."></span><span
                          className="icon-sm icon-star compact-board-tile-link-options-star js-star-board"
                          title="Click to star this board. It will show up at top of your boards list."></span></span></a></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="sidebar-section-header quiet js-sidebar-section-header bold"><a className="dark-hover" href="/cutwiseteam"><span
                    className="icon-sm icon-organization sidebar-section-header-icon"></span><span className="sidebar-section-header-title mod-clickable">Cutwise team</span><span
                    className="icon-sm icon-business-className sidebar-section-header-bc-icon hide js-has-business-className"></span></a><span
                    className="icon-sm icon-remove sidebar-section-header-toggle-icon dark-hover js-collapse-section"></span><span
                    className="icon-sm icon-add sidebar-section-header-toggle-icon dark-hover js-expand-section hide"></span></div>
                  <div className="js-section-content">
                    <div className="js-starred-empty-state sidebar-starred-boards-empty-state hide"></div>
                    <ul className="sidebar-boards-list js-board-list">
                      <li className="compact-board-tile">
                        <div className="compact-board-tile-wrapper"><span className="compact-board-tile-background"></span><span
                          className="compact-board-tile-fade"></span><a className="js-open-board compact-board-tile-link dark" href="/b/70dtwYYB/ololo-board"><span
                          className="compact-board-tile-link-thumbnail"></span><span className="compact-board-tile-link-text details"><span
                          className="compact-board-tile-link-text-name" title="Ololo board">Ololo board</span></span><span className="compact-board-tile-link-options"><span
                          className="compact-board-tile-link-options-unread js-unread" title="There is new activity on this board."></span><span
                          className="icon-sm icon-star compact-board-tile-link-options-star js-star-board"
                          title="Click to star this board. It will show up at top of your boards list."></span></span></a></div>
                      </li>
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
