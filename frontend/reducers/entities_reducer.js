import { combineReducers } from 'redux';
import tournamentReducer from './tournament_reducer';
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    tournament: tournamentReducer
})

export default entitiesReducer;