import { connect } from "react-redux"
import MapComp from "../components/Map";


const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

let MapCont = connect(null,mapDispatchToProps)(MapComp)

export default MapCont;