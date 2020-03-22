import { RECEIVE_USERS } from '../actions/users_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign(state, {})

    switch(action.type) {
        case RECEIVE_USERS:
            newState = action.users
            return newState;
        default:
            return state;
    }
}