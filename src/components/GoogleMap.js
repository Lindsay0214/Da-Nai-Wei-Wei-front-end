/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import GoogleMapReact from 'google-map-react';
import useDebounce from '../utils';
import { getShops } from '../api';
import toastConfig from '../constant';

const MyPositionMarker = ({ text }) => <div>{text}</div>;
const KEY = process.env.REACT_APP_GOOGLE_KEY;

function GoogleMap({ handleChange, searchShop }) {
  let getShopsResult = null;
  const shopData = [];
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [myPosition, setMyPosition] = useState({});
  const debouncedSearchShop = useDebounce(searchShop, 1000);
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
      });
    }
  };

  const findDrinks = () => {
    if (searchShop[0].length > 5) {
      toast.error('哎唷！文字太長了', toastConfig);
    }
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance);
      const distance = new mapApi.DistanceMatrixService();
      const request = {
        location: myPosition,
        radius: 3000,
        name: searchShop
      };
      service.nearbySearch(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          const data = [];
          getShopsResult.data.data.forEach((item) => {
            shopData.push({
              id: item.user_id,
              brandName: item.brand_name,
              URL: item.URL
            });
          });
          const distances = [];
          results.forEach((item) => {
            distances.push({
              lat: item.geometry.location.lat(),
              lng: item.geometry.location.lng()
            });
          });
          const distanceRequest = {
            origins: [myPosition],
            destinations: distances,
            travelMode: mapApi.TravelMode.DRIVING,
            unitSystem: mapApi.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          };
          distance.getDistanceMatrix(distanceRequest).then((response) => {
            results.forEach((item, index) => {
              shopData.forEach((target) => {
                if (item.name.includes(target.brandName)) {
                  data.push({
                    id: target.id,
                    distance: response.rows[0].elements[index].distance.text,
                    key: item.place_id,
                    brandName: item.name,
                    rating: item.rating,
                    address: item.vicinity,
                    isOpen: item.business_status,
                    URL: target.URL
                  });
                }
              });
            });
            if (data.length === 0) {
              toast.error('唉唷！找不到店家耶', toastConfig);
            }
            handleChange(data);
          });
        }
      });
    }
  };
  useEffect(async () => {
    if (debouncedSearchShop) {
      getShopsResult = await getShops();
      geoLocation();
      findDrinks();
    }
  }, [mapApiLoaded, debouncedSearchShop]);

  return (
    <div style={{ display: 'none' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: KEY,
          libraries: ['places']
        }}
        defaultZoom={20}
        center={myPosition}
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
export default GoogleMap;
