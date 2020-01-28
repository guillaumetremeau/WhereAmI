import React from 'react'

let BeginEnd = ({isEnd, points, distance, onSubmit}:{onSubmit: any, isEnd: boolean, points: number, distance: number}) => {
    if (isEnd) {
        return (
            <div>
                <p>Congratulation!!</p>
                <p>You earned {points} points!</p>
                <p>Cumulated distance: {distance} km</p>
                <form action="NEW_GAME" onSubmit={onSubmit()}>
                    <button type="submit">New Game</button>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <p>Do you want to start a new game?</p>
                <form action="NEW_GAME" onSubmit={onSubmit()}>
                    <button type="submit">New Game</button>
                </form>
            </div>
        )
    }
}
export default BeginEnd;