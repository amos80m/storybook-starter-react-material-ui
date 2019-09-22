import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {CoustomMarker} from './components'
import './style.less';
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"></link>

const FleetMap = ({data}) => {
  return <LeafletMap
  position={{
    lat: 38.454552,
    lng:  -9.473966,
  }}
  center={{
    lat: 38.454552,
    lng: -9.473966,
  }}
  zoom={11}
  maxZoom={18}
  attributionControl={true}
  zoomControl={true}
  doubleClickZoom={true}
  scrollWheelZoom={true}
  dragging={true}
  animate={true}
  easeLinearity={0.35}
>
  <TileLayer
    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
  />
  <CoustomMarker />
  <Marker position={{
    lat: 38.610570,
    lng: -9.536681,
  }}>
    <Popup>
      Popup for any custom information.
    </Popup>
  </Marker>
</LeafletMap>
}

export default FleetMap;