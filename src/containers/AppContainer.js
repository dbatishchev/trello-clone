import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import map from 'lodash/map'
import * as BoardActions from '../actions'
import App from "../components/App/App";

const getSelectedBoard = (boardsState) => {
  let selectedBoard = {
    ...boardsState.boardsById[boardsState.selectedBoardId],
    ...boardsState.boardsDetailsById[boardsState.selectedBoardId],
  };

  selectedBoard = {
    ...selectedBoard,
    lists: map(selectedBoard.lists, l => {
      const list = {...boardsState.listsById[l], id: l};
      list.cards = map(list.cards, cd => {
        return {
          id: cd,
          ...boardsState.cardsById[cd],
        };
      });

      return list;
    }),
  };

  return selectedBoard;
};

const mapStateToProps = state => ({
  selectedBoard: getSelectedBoard(state.boards),
  isDashboardPinned: state.dashboard.isPinned,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BoardActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)