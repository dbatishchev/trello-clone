import {connect} from 'react-redux'
import Card from '../components/Card/Card';
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
)(Card);
