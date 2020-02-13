import { MAKE_SUGGESTION, NEW_GAME_SUCCEEDED } from "../actions";

export type score = {
    score: number;
    totalKm: number
}

const initialState: score = {
    score: 0,
    totalKm: 0
}

const score = (state:score = initialState, action: any): score => {
    switch (action.type) {
        case MAKE_SUGGESTION:
            return {
                score: state.score + action.points,
                totalKm: state.totalKm + action.km
            };
        case NEW_GAME_SUCCEEDED:
            return {
                score: 0,
                totalKm: 0
            }
        default:
            return state;
    }
}

export default score;