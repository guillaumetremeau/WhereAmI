import {combineReducers} from 'redux';
import { MAKE_SUGGESTION, NEXT_LOCATION, NEW_GAME } from "./actions";

export const MAX_STEP = 5;

export type gameState = {
    isQuestion: boolean,
    score: number,
    totalKm: number,
    step: number,
    maxStep: number
}
// REDUCERS
const initialState: gameState = {
    isQuestion: true,
    score: 0,
    totalKm: 0,
    step: 1,
    maxStep: MAX_STEP
}

const suggestion = (state: gameState, action: any) => {
    if(state == null) return initialState;
    switch (action.type) {
        case MAKE_SUGGESTION:
            // state.suggestedLocation = action.location;
            state.isQuestion = false;
            return state;    
        default:
            return state;
    }
}

const score = (state:gameState, action: any) => {
    if(state == null) return initialState;
    switch (action.type) {
        case NEXT_LOCATION:
            state.score += action.score;
            state.totalKm += action.km;
            state.isQuestion = true;
            state.step++;
            return state;
        case NEW_GAME:
            return initialState;
        default:
            return state;
    }
}

const reducers = combineReducers({
    suggestion,
    score
});

export default reducers;