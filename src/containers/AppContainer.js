import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getSelectedBoard} from '../reducers/boards';
import * as BoardActions from '../actions'
import App from "../components/App/App";

const mapStateToProps = state => ({
  selectedBoard: getSelectedBoard(state),
  isDashboardPinned: state.dashboard.isPinned,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BoardActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
