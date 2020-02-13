import { MAKE_SUGGESTION, NEW_GAME_SUCCEEDED, NEXT_LOCATION_SUCCEEDED } from "../actions"



export type setScore = {
    points: number,
    km: number,
    lat: number,
    lng: number
}

const initialState: setScore = {
    points: 0,
    km: 0,
    lat: 0,
    lng: 0
}

function setScore (state: setScore = initialState, action: any)  {
    switch (action.type) {
        case NEW_GAME_SUCCEEDED:
        case NEXT_LOCATION_SUCCEEDED:
            return {
                points: 0,
                km: 0,
                lat: action.lat,
                lng: action.lng
            }
        case MAKE_SUGGESTION:
            return {
                points: action.points,
                km: action.km,
                lat: state.lat,
                lng: state.lng
            }
        default:
            return state;
    }
}

export default setScore