import { RECEIVE_TOURNAMENT_INFO } from '../actions/tournament_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign(state, {})
    debugger
    switch (action.type) {
        case RECEIVE_TOURNAMENT_INFO:
            debugger
            newState = action.tournament;
            return newState;
        default:
            return state;
    }
}