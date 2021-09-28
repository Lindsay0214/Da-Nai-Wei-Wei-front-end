import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [state, setState] = useState({
    // accuracy: null,
    latitude: null,
    longitude: null
    // speed: null,
    // timestamp: Date.now()
  });
  let mounted = true;
  let watchId;

  const onEvent = (e) => {
    if (mounted) {
      setState({
        // accuracy: e.coords.accuracy,
        latitude: e.coords.latitude,
        longitude: e.coords.longitude
        // speed: e.coords.speed,
        // timestamp: e.timestamp
      });
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent);
    watchId = navigator.geolocation.watchPosition(onEvent);

    return () => {
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, [0]);

  return state;
};

export default useGeolocation;
