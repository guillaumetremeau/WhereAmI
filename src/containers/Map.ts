import { connect } from "react-redux"
import MapComp from "../components/Map";
import { makeSuggestion } from "../actions/index";
import { gameState } from "../reducers/gameState";

const mapStateToProps = (state: {gameState: gameState}) => {
    return {
        stateId: state.gameState.stateId,
        isQuestion: state.gameState.isQuestion
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: () => {
            dispatch(makeSuggestion())
        }
    }
}

let MapCont = connect(mapStateToProps,mapDispatchToProps)(MapComp)

export default MapCont;