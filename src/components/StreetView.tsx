import React from 'react'
import ReactStreetview from 'react-streetview'
import { stateId as stateIdEnum } from '../reducers/gameState';
import { ConnectedProps } from 'react-redux';
import { connector } from '../containers/StreetView';

type Props = ConnectedProps<typeof connector>

const googleApiKey = 'AIzaSyAitQDgXUmmYoaN_tcDgSFQmkCFUcNTUnw'
const streetViewPanoramaOptions = {
    addressControl: false, // Delete possibility to access the map
    showRoadLabels: false // Delete the labels on the road
};

let StreetView = (props: Props) => {
    if(props.stateId === stateIdEnum.RUNNING){
        console.log("view:",props.lat, props.lng)
        const locationOptions = {position: {lat: props.lat, lng:  props.lng}}
        return (
            <div style={{
                width: '800px',
                height: '450px',
                backgroundColor: '#eeeeee'
            }}>
                <ReactStreetview
                    key={new Date().getTime()}// Update the map each time new prop is provided
                    apiKey={googleApiKey}
                    streetViewPanoramaOptions={
                        {...streetViewPanoramaOptions,...locationOptions}
                    }
                />
            </div>
        )
    } else return null;
}
export default StreetView;