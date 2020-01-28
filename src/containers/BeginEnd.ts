import { newGame } from "../actions"
import { connect } from "react-redux"
import BeginEnd from "../components/BeginEnd"
import { gameState } from "../reducers"


const mapStateToProps = (state: gameState) => {
    let isEnd = false;
    if (state.step >= state.maxStep) {
        isEnd = true;
    }
    return {
        isEnd: isEnd,
        points: state.score,
        distance: state.totalKm
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