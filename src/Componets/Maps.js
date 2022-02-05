import React from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';


const Maps = (props) => {
  return (

    <YMaps  > 
      <Map height={450} width="400"
    defaultState={{
      center: [55.75, 37.57],
      zoom: 4,
      controls: ['zoomControl', 'fullscreenControl'],
    }}
    modules={['control.ZoomControl', 'control.FullscreenControl']}
  >
     
{props.maps.map(({ coordinates, description})=>

<Placemark
modules={['geoObject.addon.balloon']}
defaultGeometry={coordinates}
properties={{
  balloonContentBody:description
}}
/>
)}


      </Map>
    </YMaps>

  );
}

export default Maps;