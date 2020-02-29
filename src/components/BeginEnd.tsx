import React from 'react';
import { stateId  as stateIdEnum} from '../reducers/gameState';
import { ConnectedProps } from 'react-redux';
import { connector } from '../containers/BeginEnd';

type Props = ConnectedProps<typeof connector>

const BeginEnd = (props: Props) => {
    if (props.stateId === stateIdEnum.END) {
        return (
            <div className='column'>
                <p>Congratulation!!</p>
                <p>You earned {props.points} points!</p>
                <p>Cumulated distance: {props.distance} km</p>
                <form onSubmit={e => {
                        e.preventDefault();
                        props.onSubmit();
                    }}>
                    <button type="submit">New Game</button>
                </form>
            </div>
        )
    } else if (props.stateId === stateIdEnum.BEGIN) {
        return (
            <div>
                <p>Do you want to start a new game?</p>
                <form onSubmit={e => {
                        e.preventDefault();
                        props.onSubmit();
                    }}>
                    <button type="submit">New Game</button>
                </form>
            </div>
        )
    } else return null;
}

export default BeginEnd;