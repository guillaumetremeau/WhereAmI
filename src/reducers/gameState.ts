import { MAKE_SUGGESTION, NEW_GAME_SUCCEEDED, NEXT_LOCATION_SUCCEEDED } from "../actions";

export const MAX_STEP = 5;

export enum stateId {
    BEGIN,
    RUNNING,
    END
}

// Current state of a Game
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
                isQuestion: false, // go to result state
                step: state.step 
            };
        case NEXT_LOCATION_SUCCEEDED:
            return {
                stateId: (state.step >= MAX_STEP) ? stateId.END: state.stateId, // End the game if Max step reached
                step: (state.step >= MAX_STEP) ? state.step : state.step + 1, // next step
                isQuestion: true // Go to suggestion state
            };
        case NEW_GAME_SUCCEEDED:
            // Start a new Game
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