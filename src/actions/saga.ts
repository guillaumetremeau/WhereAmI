import { put, takeEvery } from 'redux-saga/effects'
import { NEXT_LOCATION, NEW_GAME, NEW_GAME_SUCCEEDED, NEW_GAME_FAILED, NEXT_LOCATION_FAILED, NEXT_LOCATION_SUCCEEDED, MAKE_SUGGESTION, MAKE_SUGGESTION_SUCCEEDED, MAKE_SUGGESTION_FAILED } from '.';

// ------------------------------------------
// Try Random location using google api

let div: any = document.getElementById("root");

const TryRandomLocation = () => {
    var lat = (Math.random() * 90) - 90;
    var lng = (Math.random() * 180) - 180;
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
const calculateDistance = () => {
    return 5;
}

const inferPoints = (distance: number) => {
    return distance * 2;
}

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
        const distance = yield calculateDistance();
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