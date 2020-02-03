import { connect } from "react-redux"
import StreetView from "../components/StreetView";
import { gameState } from "../reducers/gameState";
import { score } from "../reducers/score";

const mapStateToProps = (state: {gameState:gameState, score: score}) => {
    return {
        stateId: state.gameState.stateId
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

let StreetViewCont = connect(mapStateToProps,mapDispatchToProps)(StreetView)

export default StreetViewCont;