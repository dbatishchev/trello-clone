import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import map from 'lodash/map'
import * as BoardActions from '../actions'
import App from "../components/App/App";

const getSelectedBoard = (state) => {
  const boardsState = state.boards;

  let selectedBoard = {
    ...boardsState.boardsById[boardsState.selectedBoardId],
    ...boardsState.boardsDetailsById[boardsState.selectedBoardId],
  };

  selectedBoard = {
    ...selectedBoard,
    lists: map(selectedBoard.lists, l => {
      const list = {...boardsState.listsById[l], id: l};
      list.cards = map(list.cards, cd => {
        const card = boardsState.cardsById[cd];
        return {
          ...card,
          assignees: map(card.assignees, a => boardsState.users[a]),
          tags: map(card.tags, a => boardsState.tags[a]),
        };
      });

      return list;
    }),
  };

  return selectedBoard;
};

const mapStateToProps = state => ({
  selectedBoard: getSelectedBoard(state),
  isDashboardPinned: state.dashboard.isPinned,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BoardActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
