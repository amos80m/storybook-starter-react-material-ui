import React from 'react';
import { Marker, Popup } from 'react-leaflet';

import L from 'leaflet';

const CoustomMarker = () => {

    const SheepIcon = new L.Icon({
        iconUrl: require('../../../../public/vessel.svg'),
        iconRetinaUrl: require('../../../../public/assets/images/icons/vessel.svg'),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(120, 63),
        className: 'leaflet-div-icon'
    });

    return <Marker icon={SheepIcon} position={{
        lat: 38.454552,
        lng: -9.473966,
      }}>
        <Popup>
          Popup for any custom information.
        </Popup>
      </Marker>
}



export default CoustomMarker;