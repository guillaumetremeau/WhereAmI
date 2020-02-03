import React from 'react'
import { stateId as stateIdEnum } from '../reducers/gameState';

let MapComp = ({stateId, isQuestion, onSubmit}:{stateId: stateIdEnum, isQuestion: boolean,onSubmit:any}) => {
    if (stateId === stateIdEnum.RUNNING) {
        if (isQuestion) {
            return (
                <div>
                    Map
                    <form onSubmit={e => {
                            e.preventDefault();
                            onSubmit();
                        }}>
                        <button type="submit">Make Suggestion</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    Map Showing distance
                </div>
            )
        } 
    } else return null;
}
export default MapComp;