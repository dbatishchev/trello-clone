import {connect} from 'react-redux'
import {closeDashboard, openDashboard} from "../actions/index";
import BoardListButton from "../components/BoardListButton/BoardListButton";

const mapStateToProps = state => ({
  isOpened: state.dashboard.isOpened,
});

const mapDispatchToProps = (dispatch) => {
  return {
    openDashboard: (list) => dispatch(openDashboard()),
    closeDashboard: (list) => dispatch(closeDashboard()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardListButton)