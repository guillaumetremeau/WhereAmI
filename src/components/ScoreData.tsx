import React from 'react'
import { MAX_STEP } from '../reducers/gameState';
import { stateId as stateIdEnum } from '../reducers/gameState';

let ScoreData = ({stateId,isQuestion,km,points,step,onSubmit}:{stateId: stateIdEnum,isQuestion: boolean, km: number, points: number, step: number, onSubmit:any}) => {
    if (stateId === stateIdEnum.RUNNING) {
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
                    <form onSubmit={e => {
                            e.preventDefault();
                            onSubmit();
                        }}>
                        <button type="submit">Next Location</button>
                    </form>
                </div>
            )
        }  
    } else return null;
}
export default ScoreData;