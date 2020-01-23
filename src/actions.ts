// ACTIONS
// 1. Take the suggested position from the map and returns proper "Action" JSON to send to other components
export const makeSuggestion = (location:string) =>  {
    return {
        type: 'MAKE_SUGGESTION',
        location: location
    }
}
// 2. Go to the next Location
export const nextLocation = (score:number, km:number) =>  {
    return {
        type: 'NEXT_LOCATION',
        score: score,
        km: km
    }
}
// 3. Start a new Game
export const newGame = () =>  {
    return {
        type: 'NEW_GAME'
    }
}