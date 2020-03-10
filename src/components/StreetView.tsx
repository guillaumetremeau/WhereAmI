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
        // If game is running showing the initial StreetView (random location)
        const locationOptions = {position: {lat: props.lat, lng:  props.lng}}
        return (
            <div className='column'>
                <div className='component' id ='StreetView'>
                    <ReactStreetview
                        key={new Date().getTime()}// Update the streetView each time new prop is provided
                        apiKey={googleApiKey}
                        streetViewPanoramaOptions={
                            {...streetViewPanoramaOptions,...locationOptions}
                        }
                    />
                </div>
            </div>
        )
    } else return null;
}
export default StreetView;