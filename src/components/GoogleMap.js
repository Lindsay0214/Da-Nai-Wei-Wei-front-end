/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { getShops } from '../api';

const MyPositionMarker = ({ text }) => <div>{text}</div>;
const KEY = process.env.REACT_APP_GOOGLE_KEY;
let getShopsResult;
const shopData = [];

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
        // console.log('where am I:', request);
      });
    }
  };

  const findDrinks = () => {
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance);
      const request = {
        location: myPosition,
        radius: 90000,
        name: ['麻古茶坊', '50嵐']
      };
      service.nearbySearch(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          const data = [];
          getShopsResult.data.data.forEach((item) => {
            shopData.push({ id: item.id, brandName: item.brand_name });
          });
          results.forEach((item) => {
            shopData.forEach((target) => {
              if (item.name.includes(target.brandName)) {
                data.push({
                  id: target.id,
                  key: item.place_id,
                  brandName: item.name,
                  rating: item.rating,
                  address: item.vicinity,
                  isOpen: item.business_status
                });
              }
            });
          });
          console.log('results', results);
          console.log(data, shopData);
          handleChange(data);
        }
      });
    }
  };
  useEffect(async () => {
    getShopsResult = await getShops();
    geoLocation();
    findDrinks();
  }, [mapApiLoaded]);

  return (
    <div style={{ display: 'none' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBVNVuasGv7fRAieoJKbsV7j5Rp-v5LEIg',
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
