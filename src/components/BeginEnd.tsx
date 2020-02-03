import React from 'react';
import { stateId  as stateIdEnum} from '../reducers/gameState';

let BeginEnd = ({stateId, points, distance, onSubmit}:{onSubmit: any, stateId: stateIdEnum, points: number, distance: number}) => {
    if (stateId === stateIdEnum.END) {
        return (
            <div>
                <p>Congratulation!!</p>
                <p>You earned {points} points!</p>
                <p>Cumulated distance: {distance} km</p>
                <form onSubmit={e => {
                        e.preventDefault();
                        onSubmit();
                    }}>
                    <button type="submit">New Game</button>
                </form>
            </div>
        )
    } else if (stateId === stateIdEnum.BEGIN) {
        return (
            <div>
                <p>Do you want to start a new game?</p>
                <form onSubmit={e => {
                        e.preventDefault();
                        onSubmit();
                    }}>
                    <button type="submit">New Game</button>
                </form>
            </div>
        )
    } else return null;
}
export default BeginEnd;