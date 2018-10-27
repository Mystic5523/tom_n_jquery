import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


class Map extends Component {
    render() {
        const GoogleMapExample = withGoogleMap(props => (
           <GoogleMap
             defaultZoom = {8}
             defaultCenter = { { lat: 38.984764, lng: -94.677658 } }
             >
           </GoogleMap>
           
        ));
     
        return(
           <div>
             <GoogleMapExample
               containerElement={ <div style={{ height: `300px`, width: '500px', }} /> }
               mapElement={ <div style={{ height: `100%` }} /> }
             />
      </div>
      
        );
        }
     };
     



export default Map;