import { connect } from "react-redux"
import MapComp from "../components/Map";
import { makeSuggestion } from "../actions/index";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => {
    return {
        stateId: state.gameState.stateId,
        isQuestion: state.gameState.isQuestion
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: () => {
            dispatch(makeSuggestion(5,64))
        }
    }
}

export const connector = connect(mapStateToProps,mapDispatchToProps)

export default connector(MapComp);