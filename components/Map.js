import React, { PropTypes } from 'react';
import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader';
import { GoogleMap, Marker } from 'react-google-maps';

const version = Math.ceil(Math.random() * 22);

const Map = (props) => (
    <div>
        <ScriptjsLoader
            hostname={'maps.googleapis.com'}
            pathname={'/maps/api/js'}
            query={{ v: `3.${ version }`, libraries: `geometry,drawing,places` }}
            loadingElement={returnLoadingElement()}
            containerElement={returnContainerElement()}
            googleMapElement={returnGoogleMapElement(props)}
        />
    </div>
);

function returnLoadingElement() {
    return (
        <div>
            loading...
        </div>
    );
}


function returnContainerElement() {
    return (
        <div className='map' />
    );
}

function returnGoogleMapElement({customer}) {
    return (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{lat: customer.activityCoordinateLatitude, lng: customer.activityCoordinateLongitude}}
        >
            <Marker position={{lat: customer.activityCoordinateLatitude, lng: customer.activityCoordinateLongitude}} />
        </GoogleMap>
    );
}

Map.propTypes = {   
    customer: PropTypes.object
};

export default Map;