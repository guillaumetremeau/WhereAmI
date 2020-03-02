import React from 'react';
import { stateId  as stateIdEnum} from '../reducers/gameState';
import { ConnectedProps } from 'react-redux';
import { connector } from '../containers/BeginEnd';
import { buttonLoad } from '../App';

type Props = ConnectedProps<typeof connector>

const BeginEnd = (props: Props) => {
    if (props.stateId === stateIdEnum.END) {
        return (
            <div className='column'>
                <p>Congratulation!!</p>
                <p>You earned {props.points} points!</p>
                <p>Cumulated distance: {props.distance.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} km</p>
                <form onSubmit={e => {
                        e.preventDefault();
                        buttonLoad(document.getElementById('buttonLoad') as HTMLElement);
                        props.onSubmit();
                    }}>
                    <button id='buttonLoad' type="submit">
                        <i></i>
                        New Game
                    </button>
                </form>
            </div>
        )
    } else if (props.stateId === stateIdEnum.BEGIN) {
        return (
            <div>
                <p>Do you want to start a new game?</p>
                <form onSubmit={e => {
                        e.preventDefault();
                        buttonLoad(document.getElementById('buttonLoad') as HTMLElement);
                        props.onSubmit();
                    }}>
                    <button type="submit" id='buttonLoad'>
                        <i></i>
                        New Game
                    </button>
                </form>
            </div>
        )
    } else return null;
}

export default BeginEnd;