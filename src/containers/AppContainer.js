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
    columns: map(selectedBoard.columns, cl => {
      const column = {...boardsState.columnsById[cl]};
      column.cards = map(column.cards, cd => boardsState.cardsById[cd]);

      return column;
    }),
  };

  return selectedBoard;
};

const mapStateToProps = state => ({
  selectedBoard: getSelectedBoard(state.boards),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BoardActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)