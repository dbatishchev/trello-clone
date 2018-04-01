import {connect} from 'react-redux'
import Dashboard from "../components/Dashboard/Dashboard";
import {pinDashboard, unpinDashboard} from "../actions/index";

const mapStateToProps = state => ({
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