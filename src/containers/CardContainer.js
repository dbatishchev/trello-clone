import DraggableCard from "../components/Card/DraggableCard/DraggableCard";
import {connect} from 'react-redux'
import {openCardModal} from "../actions";

const mapStateToProps = state => ({
  // card: state.boards.activeCard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    openCardModal: (card) => dispatch(openCardModal(card)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DraggableCard);
