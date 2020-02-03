import React from 'react'
import { stateId as stateIdEnum } from '../reducers/gameState';
import { ConnectedProps } from 'react-redux';
import { connector } from '../containers/StreetView';

type Props = ConnectedProps<typeof connector>

let StreetView = (props: Props) => {
    if(props.stateId === stateIdEnum.RUNNING){
        return (
            <div>
                StreetView
            </div>
        )
    } else return null;
}
export default StreetView;