// ACTIONS
export const MAKE_SUGGESTION = 'MAKE_SUGGESTION';
export const NEXT_LOCATION = 'NEXT_LOCATION';
export const NEW_GAME = 'NEW_GAME';
// 1. Take the suggested position from the map and returns proper "Action" JSON to send to other components
export const makeSuggestion = () =>  {
    return {
        type: MAKE_SUGGESTION
    }
}
// 2. Go to the next Location
export const nextLocation = (score:number, km:number) =>  {
    return {
        type: NEXT_LOCATION,
        score: score,
        km: km
    }
}
// 3. Start a new Game
export const newGame = () =>  {
    return {
        type: NEW_GAME
    }
}