import { MAKE_SUGGESTION, NEW_GAME_SUCCEEDED, NEXT_LOCATION_SUCCEEDED } from "../actions";

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

const gameState = (state:gameState = initialState, action: any): gameState => {
    switch (action.type) {
        case MAKE_SUGGESTION:
            state.isQuestion = false;
            return {
                stateId: state.stateId,
                isQuestion: false,
                step: state.step
            };
        case NEXT_LOCATION_SUCCEEDED:
            return {
                stateId: (state.step >= MAX_STEP) ? stateId.END: state.stateId,
                step: (state.step >= MAX_STEP) ? state.step : state.step + 1,
                isQuestion: true
            };
        case NEW_GAME_SUCCEEDED:
            state = initialState;
            state.stateId = stateId.RUNNING;
            return {
                stateId: stateId.RUNNING,
                isQuestion: true,
                step: 1
            };
        default:
            return state;
    }
}

export default gameState;