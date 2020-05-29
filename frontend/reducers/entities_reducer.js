import { combineReducers } from 'redux';
import tournamentReducer from './tournament_reducer';
import usersReducer from './users_reducer';
import playersReducer from './players_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    tournament: tournamentReducer,
    players: playersReducer
})

export default entitiesReducer;