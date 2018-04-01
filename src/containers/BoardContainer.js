import {connect} from 'react-redux'
import {moveCard} from '../actions'
import Board from "../components/Board/Board";

const mapDispatchToProps = (dispatch) => {
  return {
    moveCard: (card) => dispatch(moveCard(card)),
  };
};

export default connect(
  mapDispatchToProps
)(Board);
