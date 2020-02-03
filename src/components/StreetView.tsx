import React from 'react'
import { stateId as stateIdEnum } from '../reducers/gameState';

let StreetView = ({stateId}:{stateId:stateIdEnum}) => {
    if(stateId === stateIdEnum.RUNNING){
        return (
            <div>
                StreetView
            </div>
        )
    } else return null;
}
export default StreetView;