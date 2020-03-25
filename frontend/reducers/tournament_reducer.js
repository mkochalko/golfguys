import { RECEIVE_TOURNAMENT_INFO } from '../actions/tournament_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign(state, {})
    // debugger
    switch (action.type) {
        case RECEIVE_TOURNAMENT_INFO:
            // debugger
            newState = action.tournament.players;
            // for (let i = 0; i < Object.values(action.tournament.players).length; i++) {
            //     let playerName = Object.values(action.tournament.players)[i].player
            //     newState[playerName] = action.tournament.players[i]
            // }
            return newState;
        default:
            return state;
    }
}