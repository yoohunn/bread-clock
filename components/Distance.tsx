'use client';

import { useState, useEffect } from 'react';
import { getDistance, convertDistance } from 'geolib';

interface Coordinates {
  latitude: number;
  longitude: number;
}
export default function Distance({ latitude, longitude }: Coordinates) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [distance, setDistance] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const current = position.coords;
        setDistance(
          getDistance(
            { latitude: current.latitude, longitude: current.longitude },
            { latitude, longitude },
          ),
        );
      },
      (error) => {
        console.error(error);
      },
    );
  }, [latitude, longitude]);

  return isClient && distance !== null ? (
    <span>({Math.floor(convertDistance(distance, 'km'))}km)</span>
  ) : (
    <></>
  );
}
