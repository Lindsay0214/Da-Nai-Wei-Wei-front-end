/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const MyPositionMarker = ({ text }) => <div>{text}</div>;
// const KEY = process.env.REACT_APP_GOOGLE_KEY;
function GoogleMap({ handleChange }) {
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [myPosition, setMyPosition] = useState({
    lat: 25.0522048,
    lng: 121.55581280000001
  });

  const apiHasLoaded = (map, maps) => {
    setMapInstance(map);
    setMapApi(maps);
    setMapApiLoaded(true);
  };

  const geoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const request = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setMyPosition(request);
        console.log('where am I:', request);
      });
    }
  };

  const findDrinks = () => {
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance);
      const request = {
        location: myPosition,
        radius: 90000,
        name: ['茶涎', 'CoCo', '清心']
      };
      service.nearbySearch(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          const data = [];
          results.forEach((e) => {
            data.push({
              brandName: e.name,
              rating: e.rating,
              address: e.vicinity,
              isOpen: e.business_status
            });
            console.log('data', data);
            console.log('results', results);
            handleChange(data);
          });
        }
      });
    }
  };

  useEffect(() => {
    geoLocation();
    findDrinks();
  }, [mapApiLoaded]);

  return (
    <div style={{ display: 'none' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyB4YldYNZC09oBrLDLGOzyVs10MzejVrc8',
          libraries: ['places']
        }}
        // onBoundsChange={handleCenterChange}
        defaultZoom={20}
        defaultCenter={myPosition}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
      >
        <MyPositionMarker
          lat={myPosition.lat}
          lng={myPosition.lng}
          text="當前位置"
        />
      </GoogleMapReact>
    </div>
  );
}

// 由於改寫成 functional component，故另外設定 defaultProps
GoogleMap.defaultProps = {
  center: {
    lat: 25.0523606,
    lng: 121.5545303
  },
  zoom: 17
};

export default GoogleMap;
