import { connect } from 'react-redux'
import { getUsersInfo } from '../../actions/users_actions';
import GameIndex from './game_index';

const mapStateToProps = state => ({
    users: Object.values(state.entities.users)
})

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsersInfo())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameIndex)