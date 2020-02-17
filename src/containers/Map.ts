import { connect } from "react-redux"
import MapComp from "../components/Map";
import { makeSuggestion } from "../actions/index";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => {
    return {
        stateId: state.gameState.stateId,
        isQuestion: state.gameState.isQuestion,
        initialLat: state.setScore.lat,
        initialLng: state.setScore.lng,
        suggestedLat: state.setScore.suggestedLat,
        suggestedLng: state.setScore.suggestedLng
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: (suggestedPosition: google.maps.LatLng) => {
            dispatch(makeSuggestion(suggestedPosition.lat(), suggestedPosition.lng()))
        }
    }
}

export const connector = connect(mapStateToProps,mapDispatchToProps)

export default connector(MapComp);