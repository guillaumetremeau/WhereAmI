import React from 'react';
import GoogleMapReact from 'google-map-react';
import { stateId as stateIdEnum } from '../reducers/gameState';
import { ConnectedProps } from 'react-redux';
import { connector } from '../containers/Map';
import { buttonLoad } from '../App';

type Props = ConnectedProps<typeof connector>



let marker: google.maps.Marker | null;

// Add a marker on the map when click event (remove before if a marker exists)
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
    // Add initial marker
    let bounds  = new google.maps.LatLngBounds();
    new google.maps.Marker({
        position: {lat: initialLat, lng: initialLng},
        map: map        
    });
    bounds.extend({lat: initialLat, lng: initialLng});
    // Add suggested marker
    new google.maps.Marker({
        position: {lat: suggestedLat, lng: suggestedLng},
        map: map,
        icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
    });
    bounds.extend({lat: suggestedLat, lng: suggestedLng});
    map.fitBounds(bounds);       // auto-zoom with the two markers
    map.panToBounds(bounds);     // auto-center with the two markers
    // Show a line (travel distance) between the two marker
    new google.maps.Polyline({
        path: [{lat: initialLat, lng: initialLng},{lat: suggestedLat, lng: suggestedLng}],
        map: map,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        geodesic: true
    })

    findNearbyPlaces(map, initialLat, initialLng);
}
// Calculate the 5 nearby Places upon google services and render it
const findNearbyPlaces = (map: google.maps.Map, lat: number, lng: number) => {
    const service = new google.maps.places.PlacesService(map);
    const request = {
        location: new google.maps.LatLng(lat, lng),
        radius: 5000 // 5km
    }
    service.nearbySearch(request, callback);

    function callback(results: google.maps.places.PlaceResult[], status: google.maps.places.PlacesServiceStatus) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            // render the results of finded
            const nearbyP = document.getElementById("NearbyP");
            nearbyP?.insertAdjacentText('afterbegin',"Here is a list of places close to this location:")
            const nearbyUl = document.getElementById("NearbyUl");
            for (var i = 0; i < (results.length && 5); i++) {
                nearbyUl?.insertAdjacentHTML('beforeend',
                    "<li><a href='https://www.google.com/maps/search/?api=1&query="+
                    results[i].name+
                    "&query_place_id="+
                    results[i].place_id+
                    "'>"+
                    results[i].name+
                    "</a></li>")
            }
        }
    }
      
}

// ------------------- View
let MapComp = (props: Props) => {
    if (props.stateId === stateIdEnum.RUNNING) {
        // A game is running
        if (props.isQuestion) {
            // If it has to wait for user input (map suggestion)
            return (
                <div className='column'>
                    <div className='component' id='Map'>
                        <div style={{height: '90%', width: '100%'}}>
                            <GoogleMapReact 
                                key={new Date().getTime()}// Update the map each time new prop is provided
                                bootstrapURLKeys={{ key: 'AIzaSyAitQDgXUmmYoaN_tcDgSFQmkCFUcNTUnw' }}
                                defaultCenter={{lat: 0, lng: 0}}
                                defaultZoom={1}
                                onGoogleApiLoaded={({ map }) => handleApiLoadedSuggestionMap(map)}
                                yesIWantToUseGoogleMapApiInternals={true}
                            />
                        </div>
                        <form style={{height: '10%'}} onSubmit={e => {
                                    e.preventDefault();
                                    if (marker) {
                                        buttonLoad(document.getElementById('buttonLoad') as HTMLElement);
                                        let position: google.maps.LatLng | null | undefined = marker.getPosition();
                                        if (position) props.onSubmit(position)
                                        marker.setMap(null);
                                        marker = null;
                                    }
                                    
                                }}>
                                <button id='buttonLoad' type="submit">
                                    <i></i>
                                    Make Suggestion
                                </button>
                        </form>
                    </div>
                </div>
            )
        } else {
            // Result of a suggestion (showing both marker and travel distance on a map)
            return (
                <div className='column'>
                    <div className='component' id='Map'>
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
                </div>
            )
        } 
    } else return null;
}
export default MapComp;