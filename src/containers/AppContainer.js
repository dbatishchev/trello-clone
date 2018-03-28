import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as BoardActions from '../actions'
import App from "../components/App/App";

const mapStateToProps = state => ({
  boards: state.boards.boardList,
  activeBoard: state.boards.activeBoard,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BoardActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)