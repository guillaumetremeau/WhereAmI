// ACTIONS
export const MAKE_SUGGESTION = 'MAKE_SUGGESTION';
export const MAKE_SUGGESTION_FAILED = 'MAKE_SUGGESTION_FAILED';
export const MAKE_SUGGESTION_SUCCEEDED = 'MAKE_SUGGESTION_SUCCEEDED';
export const NEXT_LOCATION = 'NEXT_LOCATION';
export const NEXT_LOCATION_FAILED = 'NEXT_LOCATION_FAILED';
export const NEXT_LOCATION_SUCCEEDED = 'NEXT_LOCATION_SUCCEEDED';
export const NEW_GAME = 'NEW_GAME';
export const NEW_GAME_FAILED = 'NEW_GAME_FAILED';
export const NEW_GAME_SUCCEEDED = 'NEW_GAME_SUCCEEDED';

// 1. Take the suggested position from the map and returns proper "Action" JSON to send to other components
export const makeSuggestion = (lat:number, lng:number) =>  {
    return {
        type: MAKE_SUGGESTION,
        lat: lat,
        lng: lng
    }
}
// 2. Go to the next Location
export const nextLocation = () =>  {
    return {
        type: NEXT_LOCATION
    }
}
// 3. Start a new Game
export const newGame = () =>  {
    return {
        type: NEW_GAME
    }
}