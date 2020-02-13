import React from 'react'
import ReactStreetview from 'react-streetview'
import { stateId as stateIdEnum } from '../reducers/gameState';
import { ConnectedProps } from 'react-redux';
import { connector } from '../containers/StreetView';

type Props = ConnectedProps<typeof connector>

const googleApiKey = 'AIzaSyAitQDgXUmmYoaN_tcDgSFQmkCFUcNTUnw'
const streetViewPanoramaOptions = {
    position: {lat: 46.9171876, lng: 17.8951832},
    addressControl: false
};

let StreetView = (props: Props) => {
    if(props.stateId === stateIdEnum.RUNNING){
        return (
            <div style={{
                width: '800px',
                height: '450px',
                backgroundColor: '#eeeeee'
            }}>
                <ReactStreetview
                    apiKey={googleApiKey}
                    streetViewPanoramaOptions={streetViewPanoramaOptions}
                />
            </div>
        )
    } else return null;
}
export default StreetView;