import { connect } from 'react-redux';
import PlayNowIndex from './play_now_index'
import { getPlayersInfo } from '../../actions/players_actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    getPlayers: () => dispatch(getPlayersInfo())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayNowIndex);