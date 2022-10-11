/*--- Common funtions ---*/


/*- Creates a map object on a given div container -*/
export function createMap(divId){
	mapboxgl.accessToken = 'pk.eyJ1Ijoib25yY3JwayIsImEiOiJjbDR5NDFyODIwMjNjM29xdmdoMzkwNTYyIn0.ZMWChkul0Sq5D-l2s2EUmA';
    const map = new mapboxgl.Map({
        container: 'sts_map_div',
        style: 'mapbox://styles/onrcrpk/cl949ux6k000y14ljywokppnd',
        center: [-77.0369, 38.8972],
        zoom: 12,
        projection: 'globe',
    });
    // Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl({
    // Hide compass
    showCompass: false
  }), 'top-left');
	return map;
};