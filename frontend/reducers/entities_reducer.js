import { combineReducers } from 'redux';
import tournamentReducer from './tournament_reducer';


const entitiesReducer = combineReducers({
    tournament: tournamentReducer
})

export default entitiesReducer;