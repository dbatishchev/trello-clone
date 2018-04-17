import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListHeader from '../components/ListHeader/ListHeader';
import {updateList} from '../actions/index';

class ListHeaderContainer extends Component {

  handleChange = (e) => {
    const val = e.target.value;
    if (!val.trim()) {
      return
    }

    this.props.updateList(this.props.list, {title: val});
  };

  render() {
    return (
      <ListHeader
        onChange={this.handleChange}
        list={this.props.list}
      >
      </ListHeader>
    )
  }
}

const mapStateToProps = state => ({
});


const mapDispatchToProps = (dispatch) => {
  return {
    updateList: (list, data) => dispatch(updateList(list, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListHeaderContainer);
