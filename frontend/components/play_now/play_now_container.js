import { connect } from 'react-redux';
import PlayNowIndex from './play_now_index'
import { getPlayersInfo } from '../../actions/players_actions';
import { createLineup } from '../../util/users_util';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    getPlayers: () => dispatch(getPlayersInfo()),
    createLineup: (user) => createLineup(user)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayNowIndex);