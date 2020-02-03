import { MAKE_SUGGESTION, NEXT_LOCATION, NEW_GAME } from "../actions";

export const MAX_STEP = 5;

export enum stateId {
    BEGIN,
    RUNNING,
    END
}

export type gameState = {
    stateId: stateId,
    isQuestion: boolean,
    step: number
}
// REDUCERS
const initialState: gameState = {
    stateId: stateId.BEGIN,
    isQuestion: true,
    step: 1
}

const gameState = (state:gameState = initialState, action: any) => {
    switch (action.type) {
        case MAKE_SUGGESTION:
            state.isQuestion = false;
            return state;
        case NEXT_LOCATION:
            state.isQuestion = true;
            if(state.step >= MAX_STEP) {
                state.stateId = stateId.END
            } else {
                state.step++;
            }
            return state;
        case NEW_GAME:
            state = initialState;
            state.stateId = stateId.RUNNING;
            return state;
        default:
            return state;
    }
}

export default gameState;