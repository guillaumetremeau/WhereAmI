import React from 'react';
import { stateId  as stateIdEnum} from '../reducers/gameState';
import { ConnectedProps } from 'react-redux';
import { connector } from '../containers/BeginEnd';
import { buttonLoad } from '../App';

type Props = ConnectedProps<typeof connector>

const BeginEnd = (props: Props) => {
    if (props.stateId === stateIdEnum.END) {
        // End page of the game
        return (
            <div className='column'>
                <h1>Congratulation!!</h1>
                <p>You earned <span>{props.points}</span> points!</p>
                <p>Cumulated distance: <span>{props.distance.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span> km</p>
                <form onSubmit={e => {
                        e.preventDefault();
                        buttonLoad(document.getElementById('buttonLoad') as HTMLElement);
                        props.onSubmit(); // Start new Game
                    }}>
                    <button id='buttonLoad' type="submit">
                        <i></i>
                        New Game
                    </button>
                </form>
            </div>
        )
    } else if (props.stateId === stateIdEnum.BEGIN) {
        // Welcome page of the game
        return (
            <div>
                <h1>Do you want to start a new game?</h1>
                <form onSubmit={e => {
                        e.preventDefault();
                        buttonLoad(document.getElementById('buttonLoad') as HTMLElement);
                        props.onSubmit(); // Start new Game
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