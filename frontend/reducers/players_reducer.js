import { RECEIVE_PLAYERS } from '../actions/players_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign(state, {})

    switch (action.type) {
        case RECEIVE_PLAYERS:
            newState = action.players
            return newState;
        default:
            return state;
    }
}