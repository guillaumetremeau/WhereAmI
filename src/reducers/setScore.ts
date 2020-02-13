import { NEXT_LOCATION, MAKE_SUGGESTION, NEW_GAME } from "../actions"



export type setScore = {
    points: number,
    km: number,
    lat: number,
    lng: number
}

const initialState: setScore = {
    points: 0,
    km: 0,
    lat: 0,
    lng: 0
}

let div: any = document.getElementById("root");

const TryRandomLocation = () => {
    console.log("Try random location")
    var lat = (Math.random() * 90) - 90;
    var lng = (Math.random() * 180) - 180;
    var sv = new google.maps.StreetViewService();


    const HandleCallback = (data: any, status: google.maps.StreetViewStatus) => {
        if (status === google.maps.StreetViewStatus.OK) {
            // Call your code to display the panorama here.
            var value = {lat: data.location.latLng.lat, lng: data.location.latLng.lng};
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
        radius: 50000
    }, HandleCallback);
}

async function setScore (state: setScore = initialState, action: any)  {
    switch (action.type) {
        case NEW_GAME:
        case NEXT_LOCATION:
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
            })
            console.log("coord: ",lat,lng)
            return {
                points: 0,
                km: 0,
                lat: lat,
                lng: lng
            }
        case MAKE_SUGGESTION:
            return {
                points: action.points,
                km: action.km,
                lat: state.lat,
                lng: state.lng
            }
        default:
            return state;
    }
}

export default setScore