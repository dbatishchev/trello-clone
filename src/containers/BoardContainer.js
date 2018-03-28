import {connect} from 'react-redux'
import {moveCard} from '../actions'
import Board from "../components/Board/Board";

const mapStateToProps = state => ({
  board: state.boards.activeBoard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    moveCard: (card) => dispatch(moveCard(card)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
