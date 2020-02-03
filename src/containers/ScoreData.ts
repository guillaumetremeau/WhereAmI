import { connect } from "react-redux";
import ScoreData from "../components/ScoreData";
import { nextLocation } from "../actions/index";
import { gameState } from "../reducers/gameState";
import { score } from "../reducers/score";

const mapStateToProps = (state: {gameState:gameState, score: score}) => {
    return {
        stateId: state.gameState.stateId,
        isQuestion: state.gameState.isQuestion,
        km: state.score.totalKm,
        points: state.score.score,
        step: state.gameState.step,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: () => {
            dispatch(nextLocation(2,12))
        }
    }
}

let ScoreDataCont = connect(mapStateToProps,mapDispatchToProps)(ScoreData)

export default ScoreDataCont;