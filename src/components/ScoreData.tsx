import React from 'react'
import { MAX_STEP } from '../reducers/gameState';
import { stateId as stateIdEnum } from '../reducers/gameState';
import { connector } from '../containers/ScoreData';
import { ConnectedProps } from 'react-redux';

type Props = ConnectedProps<typeof connector>

let ScoreData = (props: Props) => {
    if (props.stateId === stateIdEnum.RUNNING) {
        if (props.isQuestion) {
            return (
                <div  className='column'>
                    <p>Set {props.step} out of {MAX_STEP}</p>
                    <p>Points: {props.score.score}</p>
                    <p>Total distance: {props.score.totalKm.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                </div>
            )    
        } else {
            return (
                <div className='column'>
                    <p>Set {props.step} out of {MAX_STEP}</p>
                    <p>You are {props.setScore.km.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} km far away from your suggestion</p>
                    <p>I give you {props.setScore.points} points</p>
                    <form onSubmit={e => {
                            e.preventDefault();
                            props.onSubmit();
                        }}>
                        <button type="submit">{(props.step === MAX_STEP) ? "See your result":"Next Location"}</button>
                    </form>
                    <p>Here is the list of places close to this location:</p>
                    <p>Here is the list of places close to this location:</p>
                    <p>Here is the list of places close to this location:</p>
                    <p>Here is the list of places close to this location:</p>
                    <p>Here is the list of places close to this location:</p>
                    <p>Here is the list of places close to this location:</p>
                    <p>Here is the list of places close to this location:</p>
                    <p>Here is the list of places close to this location:</p>
                    <p>Here is the list of places close to this location:</p>
                </div>
            )
        }  
    } else return null;
}
export default ScoreData;