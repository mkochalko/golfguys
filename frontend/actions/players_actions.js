import { getPlayers } from '../util/players_util';

export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'

const receivePlayers = players => ({
    type: RECEIVE_PLAYERS,
    players
})

export const getPlayersInfo = () => dispatch => (
    getPlayers().then(players => dispatch(receivePlayers(players)))
)
