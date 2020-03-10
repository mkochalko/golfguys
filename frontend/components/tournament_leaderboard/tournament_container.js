import { connect } from 'react-redux';
import { fetchTournamentInfo } from '../../actions/tournament_actions';
import TournamentIndex from './tournament_index';

const mapStateToProps = state => ({
    leaderboard: state.entities.tournament
})

const mapDispatchToProps = dispatch => ({
    getTournamentInfo: () => dispatch(fetchTournamentInfo())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TournamentIndex)