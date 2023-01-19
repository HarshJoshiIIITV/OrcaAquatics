import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 26.9124,
      lng: 75.7873
    },
    zoom: 20
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCHw0oqFNB3W7vSyPXsmTa8iSkL9lxk63k" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={26.9124}
          lng={75.7873}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}