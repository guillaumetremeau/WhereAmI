import { put, takeEvery, select } from 'redux-saga/effects'
import { NEXT_LOCATION, NEW_GAME, NEW_GAME_SUCCEEDED, NEW_GAME_FAILED, NEXT_LOCATION_FAILED, NEXT_LOCATION_SUCCEEDED, MAKE_SUGGESTION, MAKE_SUGGESTION_SUCCEEDED, MAKE_SUGGESTION_FAILED } from '.';
import { getInitialLat, getInitialLng } from '../reducers';

// ------------------------------------------
// Try Random location using google api

let div: any = document.getElementById("root");

const TryRandomLocation = () => {
    var lat = (Math.random() * (180 - -180) - 180);
    var lng = (Math.random() * (180 - -180) - 180);
    var sv = new google.maps.StreetViewService();


    const HandleCallback = (data: any, status: google.maps.StreetViewStatus) => {
        if (status === google.maps.StreetViewStatus.OK) {
            // Call your code to display the panorama here.
            var value = {lat: data.location.latLng.lat(), lng: data.location.latLng.lng()};
            // send event with value
            div.dispatchEvent(new CustomEvent("FindRandomLocation", {detail: value}))
        } else {
            // Nothing here! Let's try another location.
            TryRandomLocation();
        }
    }
    

    // Try to find a panorama within 50 metres 
    sv.getPanorama({
        location: new google.maps.LatLng(lat, lng),
        radius: 50000,
        preference: google.maps.StreetViewPreference.NEAREST,
        source: google.maps.StreetViewSource.OUTDOOR
    }, HandleCallback);
}

async function newLocation() {
    var lat = 0;
    var lng = 0;
    TryRandomLocation();
    let waitForEvent = new Promise((resolve) => {
        div.addEventListener("FindRandomLocation", (e: CustomEvent) => {
            resolve(e.detail);
        });
    });
    await waitForEvent.then((value:any) => {
        lat = value.lat;
        lng = value.lng;
    });
    return {
        lat: lat,
        lng: lng
    }
}

// -----------------------------------
// MAKE SUGGESTION - Calculate distance and points
const calculateDistance = (initialLat: number, initialLng: number, suggestedLat: number, suggestedLng: number) => {
    let distance = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng({lat: initialLat, lng: initialLng}),
        new google.maps.LatLng({lat: suggestedLat, lng: suggestedLng})
    );
    distance /= 1000; // from meters to km
    return distance;
}

// distance in km
const inferPoints = (distance: number) => { // from 0 to 10 points
    let points = -1.898038 + (10.11958 - -1.898038)/(1 + Math.pow(distance/952.7294,1.009524)); // Curve build on https://mycurvefit.com/
    points = Math.round(points * 10) / 10; // Round number with one decimal https://jsperf.com/rounding-methods-in-javascript
    if (points > 10) points = 10;
    if (points < 0) points = 0;
    return points;
}
// tests
/*
inferPoints(1);
inferPoints(100);
inferPoints(200);
inferPoints(500);
inferPoints(1000);
inferPoints(2000);
inferPoints(5000);
inferPoints(20000);*/

// ------------------------------------
// Saga Actions

function* newGame() {
    try {
        const latLng = yield newLocation();
        yield put({type: NEW_GAME_SUCCEEDED, ...latLng});
    } catch (e) {
        yield put({type: NEW_GAME_FAILED, message: e.message});
    }
}

function* nextLocation() {
    try {
        const latLng = yield newLocation();
        yield put({type: NEXT_LOCATION_SUCCEEDED, ...latLng});
    } catch (e) {
        yield put({type: NEXT_LOCATION_FAILED, message: e.message});
    }
 }

 function* makeSuggestion(action:any) {
    try {
        const initialLat = yield select(getInitialLat);
        const initialLng = yield select(getInitialLng);
        const distance = yield calculateDistance(initialLat, initialLng, action.lat, action.lng);
        const points = yield inferPoints(distance);
        yield put({type: MAKE_SUGGESTION_SUCCEEDED, km: distance, points: points, suggestedLat: action.lat, suggestedLng: action.lng})
    } catch (e) {
        yield put({type: MAKE_SUGGESTION_FAILED, message: e.message});
    }
 }


 /*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(NEW_GAME, newGame);
    yield takeEvery(NEXT_LOCATION, nextLocation);
    yield takeEvery(MAKE_SUGGESTION, makeSuggestion);
}

export default mySaga;