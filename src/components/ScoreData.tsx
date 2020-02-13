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
                <div>
                    <p>Set {props.step} out of {MAX_STEP}</p>
                    <p>points: {props.score.score}</p>
                    <p>distance: {props.score.totalKm}</p>
                </div>
            )    
        } else {
            return (
                <div id="streetView">
                    <p>Set {props.step} out of {MAX_STEP}</p>
                    <p>You are {props.setScore.points} km far away from your suggestion</p>
                    <p>I give you {props.setScore.km} points</p>
                    <form onSubmit={e => {
                            e.preventDefault();
                            props.onSubmit();
                        }}>
                        <button type="submit">{(props.step === MAX_STEP) ? "See your result":"Next Location"}</button>
                    </form>
                    <p>Here is the list of places close to this location:</p>
                </div>
            )
        }  
    } else return null;
}
export default ScoreData;