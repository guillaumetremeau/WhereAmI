import { NEXT_LOCATION, MAKE_SUGGESTION, NEW_GAME } from "../actions"

export type setScore = {
    points: number,
    km: number
}

const initialState: setScore = {
    points: 0,
    km: 0,
}

const setScore = (state: setScore = initialState, action: any): setScore => {
    switch (action.type) {
        case NEXT_LOCATION:
            return {
                points: 0,
                km: 0
            }
        case MAKE_SUGGESTION:
            return {
                points: action.points,
                km: action.km
            }
        case NEW_GAME:
            return {
                points: 0,
                km: 0
            }
        default:
            return state;
    }
}

export default setScore