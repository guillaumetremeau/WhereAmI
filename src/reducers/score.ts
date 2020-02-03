import { NEXT_LOCATION, NEW_GAME } from "../actions";

export type score = {
    score: number;
    totalKm: number
}

const initialState: score = {
    score: 0,
    totalKm: 0
}

const score = (state:score = initialState, action: any) => {
    switch (action.type) {
        case NEXT_LOCATION:
            state.score += action.score;
            state.totalKm += action.km;
            return state;
        case NEW_GAME:
            return initialState
        default:
            return state;
    }
}

export default score;