import React from 'react'
import { MAX_STEP } from '../reducers';

let ScoreData = (isQuestion: boolean, km: number, points: number, step: number) => {
    if (isQuestion) {
        return (
            <div>
                <p>Set {step} out of {MAX_STEP}</p>
                <p>points: {points}</p>
                <p>distance: {km}</p>
            </div>
        )    
    } else {
        return (
            <div>
                <p>Set {step} out of {MAX_STEP}</p>
                <p>You are {km} km far away from your suggestion</p>
                <p>I give you {points} points</p>
                <form action="NEXT_LOCATION">
                    <button type="submit">Next Location</button>
                </form>
            </div>
        )
    }
    
}
export default ScoreData;