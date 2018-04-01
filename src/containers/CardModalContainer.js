import {connect} from 'react-redux'
import CardModal from "../components/CardModal/CardModal";
import {closeCardModal} from "../actions/index";

const mapStateToProps = state => ({
    card: state.boards.activeCard,
    isOpened: state.boards.isCardModalOpened,
});

const mapDispatchToProps = dispatch => ({
  onClose: (card) => dispatch(closeCardModal(card)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardModal)