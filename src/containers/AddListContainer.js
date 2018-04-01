import {connect} from 'react-redux'
import AddList from "../components/AddList/AddList";
import {createList} from "../actions/index";

const mapStateToProps = state => ({
  // card: state.boards.activeCard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (list) => dispatch(createList(list))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddList);
