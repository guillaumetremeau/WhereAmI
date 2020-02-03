import { newGame } from "../actions/index"
import { connect } from "react-redux"
import BeginEnd from "../components/BeginEnd"
import { RootState } from "../reducers"


const mapStateToProps = (state: RootState) => {
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

export const connector = connect(mapStateToProps,mapDispatchToProps)

export default connector(BeginEnd);