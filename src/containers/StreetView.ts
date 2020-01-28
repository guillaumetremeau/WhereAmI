import { connect } from "react-redux"
import StreetView from "../components/StreetView";


const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

let StreetViewCont = connect(null,mapDispatchToProps)(StreetView)

export default StreetViewCont;