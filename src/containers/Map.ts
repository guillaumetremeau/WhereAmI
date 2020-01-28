import { connect } from "react-redux"
import MapComp from "../components/Map";
import { makeSuggestion } from "../actions";
import { gameState } from "../reducers";

const mapStateToProps = (state: gameState) => {
    return {
        isQuestion: state.isQuestion
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