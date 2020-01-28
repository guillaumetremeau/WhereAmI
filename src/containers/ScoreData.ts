import { connect } from "react-redux"
import { gameState } from "../reducers";
import ScoreData from "../components/ScoreData";
import { nextLocation } from "../actions";

const mapStateToProps = (state: gameState) => {
    return {
        isQuestion: state.isQuestion,
        km: state.totalKm,
        points: state.score,
        step: state.step,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: () => {
            dispatch(nextLocation(12,12))
        }
    }
}

let ScoreDataCont = connect(mapStateToProps,mapDispatchToProps)(ScoreData)

export default ScoreDataCont;