import {connect} from 'react-redux'
import {getSelectedCard} from '../reducers/boards';
import CardModal from "../components/CardModal/CardModal";
import {closeCardModal} from "../actions/index";

const mapStateToProps = state => ({
    card: getSelectedCard(state),
    isOpened: state.boards.isCardModalOpened,
});

const mapDispatchToProps = dispatch => ({
  onClose: (card) => dispatch(closeCardModal(card)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardModal)
