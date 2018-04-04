import {connect} from 'react-redux'
import merge from 'lodash/merge'
import values from 'lodash/values'
import Dashboard from "../components/Dashboard/Dashboard";
import {pinDashboard, unpinDashboard} from "../actions/index";

const getBoardsList = (boardsState) => {
  return values(merge(boardsState.boardsById, boardsState.boardsDetailsById));
};

const mapStateToProps = state => ({
  boards: getBoardsList(state.boards),
  isPinned: state.dashboard.isPinned,
  isOpened: state.dashboard.isOpened,
});

const mapDispatchToProps = (dispatch) => {
  return {
    pinDashboard: (list) => dispatch(pinDashboard()),
    unpinDashboard: (list) => dispatch(unpinDashboard()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)