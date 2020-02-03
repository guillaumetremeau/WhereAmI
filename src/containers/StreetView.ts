import { connect } from "react-redux"
import StreetView from "../components/StreetView";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => {
    return {
        stateId: state.gameState.stateId
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

export const connector = connect(mapStateToProps,mapDispatchToProps)

export default connector(StreetView);