import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as BoardActions from '../actions'
import App from "../components/App/App";

// const App = ({todos, actions}) => (
//     <div>
//         <Header addTodo={actions.addTodo} />
//         <MainSection todos={todos} actions={actions} />
//     </div>
// )
//
// App.propTypes = {
//     todos: PropTypes.array.isRequired,
//     actions: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
    boards: state.boards
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(BoardActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)