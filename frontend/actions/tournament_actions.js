import { getTournamentInfo } from '../util/tournament_util';

export const RECEIVE_TOURNAMENT_INFO = 'RECEIVE_TOURNAMENT_INFO'

const receiveTournamentInfo = tournament => ({
    type: RECEIVE_TOURNAMENT_INFO,
    tournament
})


export const fetchTournamentInfo = dispatch => (
    getTournamentInfo().then(leaderboard => {
        debugger;
        dispatch(receiveTournamentInfo(leaderboard))})
)

