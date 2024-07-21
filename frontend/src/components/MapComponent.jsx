// MapComponent.js
import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 20.5937,  // Default latitude (India's latitude)
  lng: 78.9629   // Default longitude (India's longitude)
};

function MapComponent({ onLocationSelect }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // Replace with your API key
  });

  const [markerPosition, setMarkerPosition] = useState(center);

  const handleMapClick = useCallback((event) => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();
    setMarkerPosition({ lat: newLat, lng: newLng });
    onLocationSelect({ lat: newLat, lng: newLng });
  }, [onLocationSelect]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onClick={handleMapClick}
    >
      <Marker position={markerPosition} />
    </GoogleMap>
  ) : <></>;
}

export default React.memo(MapComponent);
