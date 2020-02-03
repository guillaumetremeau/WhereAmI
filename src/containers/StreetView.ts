import { connect } from "react-redux"
import StreetView from "../components/StreetView";
import { gameState } from "../reducers/gameState";

const mapStateToProps = (state: {gameState:gameState}) => {
    return {
        stateId: state.gameState.stateId
    }
}

let StreetViewCont = connect(mapStateToProps,null)(StreetView)

export default StreetViewCont;