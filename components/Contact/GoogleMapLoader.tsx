import React from 'react';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '400px',
};

const center = {
  lat: 40.751573,
  lng: -73.97754,
};

const markerPosition = {
  lat: 40.751573,
  lng: -73.97754,
};

const monotoneStyle = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      { saturation: -100 }, // Remove all color
      { lightness: 45 }, // Adjust lightness as needed
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#CCDEE9' }, // Light gray water
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ visibility: 'off' }],
  },
  // Show only major roads
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ visibility: 'on' }, { color: '#999999' }, { weight: 0.2 }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ visibility: 'on' }, { color: '#999999' }, { weight: 0.15 }],
  },
];

const GoogleMapLoader = ({ handleMarkerClick }: { handleMarkerClick: () => void }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  if (!apiKey) {
    console.error('Google Maps API key is not set');
    return <div>Map cannot be loaded - API key is missing</div>;
  }

  return (
    <LoadScriptNext googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        mapContainerClassName="h-full w-full lg:!min-h-[680px]"
        options={{
          styles: [
            ...monotoneStyle,
            {
              featureType: 'all',
              elementType: 'labels',
              stylers: [{ visibility: 'on' }],
            },
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'road',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'transit',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'administrative',
              elementType: 'geometry',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'administrative.land_parcel',
              elementType: 'geometry',
              stylers: [{ visibility: 'off' }],
            },
          ],
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: false,
          fullscreenControl: false,
          disableDefaultUI: true,
          mapTypeId: 'roadmap',
        }}
      >
        <Marker
          position={markerPosition}
          icon={{
            path: 'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z',
            fillColor: '#212121',
            fillOpacity: 1,
            strokeWeight: 1,
            scale: 2.5,
            anchor: { x: 12, y: 24, equals: () => false },
          }}
          onClick={handleMarkerClick}
        />
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default GoogleMapLoader;
