import {connect} from 'react-redux'
import {moveCard} from '../actions'
import Board from "../components/Board/Board";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return {
    onMoveCard: (cardId, sourceListId, destinationListId, sourceIndex, destinationIndex) => dispatch(moveCard(cardId, sourceListId, destinationListId, sourceIndex, destinationIndex)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
