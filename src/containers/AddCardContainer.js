import {connect} from 'react-redux'
import AddCard from "../components/AddCard/AddCard";
import {createCard} from "../actions/index";

const mapStateToProps = state => ({
  // card: state.boards.activeCard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (card, list) => dispatch(createCard(card, list))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);
