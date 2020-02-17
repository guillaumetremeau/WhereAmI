import React from 'react';
import GoogleMapReact from 'google-map-react';
import { stateId as stateIdEnum } from '../reducers/gameState';
import { ConnectedProps } from 'react-redux';
import { connector } from '../containers/Map';

type Props = ConnectedProps<typeof connector>



let marker: google.maps.Marker | null;

const handleApiLoadedSuggestionMap = (map: any) => {
    map.addListener('click', (e: any) => { // Listen onClicks events
        if (marker) marker.setMap(null); // Check if marker is defined, remove if so
        marker = new google.maps.Marker({ // Add a new marker
            position: e.latLng,
            map: map,
            icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
        });
    });
}

const handleApiLoadedDistanceMap = (map:any, initialLat: number, initialLng: number, suggestedLat: number, suggestedLng: number) => {
    let bounds  = new google.maps.LatLngBounds();
    new google.maps.Marker({
        position: {lat: initialLat, lng: initialLng},
        map: map        
    });
    bounds.extend({lat: initialLat, lng: initialLng});
    new google.maps.Marker({
        position: {lat: suggestedLat, lng: suggestedLng},
        map: map,
        icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
    });
    bounds.extend({lat: suggestedLat, lng: suggestedLng});
    map.fitBounds(bounds);       // auto-zoom
    map.panToBounds(bounds);     // auto-center

    new google.maps.Polyline({
        path: [{lat: initialLat, lng: initialLng},{lat: suggestedLat, lng: suggestedLng}],
        map: map,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    })
}
let MapComp = (props: Props) => {
    if (props.stateId === stateIdEnum.RUNNING) {
        if (props.isQuestion) {
            return (
                <div style={{ height: '60vh', width: '70%', margin: '10px' }}>
                    <div style={{height: '80%', width: '100%'}}>
                        <GoogleMapReact 
                            key={new Date().getTime()}// Update the map each time new prop is provided
                            bootstrapURLKeys={{ key: 'AIzaSyAitQDgXUmmYoaN_tcDgSFQmkCFUcNTUnw' }}
                            defaultCenter={{lat: 0, lng: 0}}
                            defaultZoom={1}
                            onGoogleApiLoaded={({ map }) => handleApiLoadedSuggestionMap(map)}
                            yesIWantToUseGoogleMapApiInternals={true}
                        />
                    </div>
                    <form onSubmit={e => {
                                e.preventDefault();
                                if (marker) {
                                    let position: google.maps.LatLng | null | undefined = marker.getPosition();
                                    if (position) props.onSubmit(position)
                                    marker.setMap(null);
                                    marker = null;
                                }
                                
                            }}>
                            <button type="submit">Make Suggestion</button>
                    </form>
                </div>
                
            )
        } else {
            return (
                <div style={{ height: '60vh', width: '70%', margin: '10px' }}>
                    <div style={{height: '100%', width: '100%'}}>
                        <GoogleMapReact 
                            key={new Date().getTime()}// Update the map each time new prop is provided
                            bootstrapURLKeys={{ key: 'AIzaSyAitQDgXUmmYoaN_tcDgSFQmkCFUcNTUnw' }}
                            defaultCenter={{lat: props.initialLat, lng: props.initialLng}}
                            defaultZoom={1}
                            onGoogleApiLoaded={({ map }) => handleApiLoadedDistanceMap(map, props.initialLat, props.initialLng, props.suggestedLat, props.suggestedLng)}
                            yesIWantToUseGoogleMapApiInternals={true}
                        />
                    </div>
                </div>
            )
        } 
    } else return null;
}
export default MapComp;