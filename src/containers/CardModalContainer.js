import {connect} from 'react-redux'
import CardModal from "../components/CardModal/CardModal";
import {closeCardModal} from "../actions/index";

const getSelectedCard = (cardsById, selectedCardId) => {
  return cardsById[selectedCardId];
};

const mapStateToProps = state => ({
    card: getSelectedCard(state.boards.cardsById, state.boards.selectedCardId),
    isOpened: state.boards.isCardModalOpened,
});

const mapDispatchToProps = dispatch => ({
  onClose: (card) => dispatch(closeCardModal(card)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardModal)