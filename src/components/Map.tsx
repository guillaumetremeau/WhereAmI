import React from 'react'
import { stateId as stateIdEnum } from '../reducers/gameState';
import { ConnectedProps } from 'react-redux';
import { connector } from '../containers/Map';

type Props = ConnectedProps<typeof connector>

let MapComp = (props: Props) => {
    if (props.stateId === stateIdEnum.RUNNING) {
        if (props.isQuestion) {
            return (
                <div>
                    Map
                    <form onSubmit={e => {
                            e.preventDefault();
                            props.onSubmit();
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