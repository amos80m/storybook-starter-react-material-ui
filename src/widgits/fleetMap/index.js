import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import {CoustomMarker} from './components'
import FleetArrMock from './mock';
import './style.less';
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"></link>

const FleetMap = ({data}) => {

  const [tempArrLatLong, setFleetMove] = React.useState([]);

  React.useEffect(() => {
    setFleetMove(FleetArrMock)
  },[]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      moveVessel();
    }, 1000);
    return () => clearTimeout(timer);
  });

  

  const moveVessel = () => {
    let arr = [...tempArrLatLong];
    arr[0].position.lat = arr[0].position.lat + 0.0001;
    arr[0].position.lng = arr[0].position.lng + 0.0001;
    setFleetMove(arr)
  }

  return <LeafletMap
  position={{
    lat: 38.454552,
    lng:  -9.473966,
  }}
  center={{
    lat: 38.454552,
    lng: -9.473966,
  }}
  stroke={true}
  zoom={9}
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
  {FleetArrMock && FleetArrMock.length > 0 && <CoustomMarker data={tempArrLatLong} />}
</LeafletMap>
}

export default FleetMap;