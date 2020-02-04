import { connect } from "react-redux";
import ScoreData from "../components/ScoreData";
import { nextLocation } from "../actions/index";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => {
    return {
        stateId: state.gameState.stateId,
        isQuestion: state.gameState.isQuestion,
        score: state.score,
        step: state.gameState.step,
        setScore: state.setScore
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: () => {
            dispatch(nextLocation())
        }
    }
}

export const connector = connect(mapStateToProps,mapDispatchToProps)

export default connector(ScoreData);