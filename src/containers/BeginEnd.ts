import { newGame } from "../actions/index"
import { connect } from "react-redux"
import BeginEnd from "../components/BeginEnd"
import { gameState } from "../reducers/gameState"
import { score } from "../reducers/score"


const mapStateToProps = (state: {gameState:gameState, score: score}) => {
    return {
        stateId: state.gameState.stateId,
        points: state.score.score,
        distance: state.score.totalKm
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: () => {
            dispatch(newGame())
        }
    }
}

let BeginEndCont = connect(mapStateToProps,mapDispatchToProps)(BeginEnd)

export default BeginEndCont;