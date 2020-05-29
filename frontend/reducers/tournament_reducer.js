import { RECEIVE_TOURNAMENT_INFO } from '../actions/tournament_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    let newState = {};
    switch (action.type) {
        case RECEIVE_TOURNAMENT_INFO:
            let players = Object.values(action.tournament.players)
            for (let i = 0; i < players.length; i++) {
                let playerName = players[i].player
                newState[playerName] = players[i]
            }
            return newState;
        default:
            return state;
    }
}