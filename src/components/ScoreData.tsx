import React from 'react'
import { MAX_STEP } from '../reducers/gameState';
import { stateId as stateIdEnum } from '../reducers/gameState';
import { connector } from '../containers/ScoreData';
import { ConnectedProps } from 'react-redux';
import { buttonLoad } from '../App';

type Props = ConnectedProps<typeof connector>

let ScoreData = (props: Props) => {
    if (props.stateId === stateIdEnum.RUNNING) {
        // If a game is running
        if (props.isQuestion) {
            // Showing current state of the game if it is a question
            return (
                <div  className='column'>
                    <h1>Set <span>{props.step}</span> out of {MAX_STEP}</h1>
                    <p>Points: <span>{props.score.score}</span></p>
                    <p>Total distance: <span>{props.score.totalKm.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></p>
                </div>
            )    
        } else {
            // Showing result of the suggestion and potential Nearby places
            return (
                <div className='column'>
                    <h1>Set <span>{props.step}</span> out of {MAX_STEP}</h1>
                    <p>You are <span>{props.setScore.km.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span> km far away from your suggestion</p>
                    <p>I give you <span>{props.setScore.points}</span> points</p>
                    <form onSubmit={e => {
                            e.preventDefault();
                            buttonLoad(document.getElementById('buttonLoad') as HTMLElement);
                            props.onSubmit();
                        }}>
                        <button id='buttonLoad' type="submit">
                            <i></i>
                            {(props.step === MAX_STEP) ? "See your result":"Next Location"}
                        </button>
                    </form>
                    <h2 id='NearbyP'></h2>
                    <ul className="small" id='NearbyUl'></ul>
                </div>
            )
        }  
    } else return null;
}
export default ScoreData;