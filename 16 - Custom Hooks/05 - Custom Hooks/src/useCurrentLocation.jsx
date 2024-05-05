import { useEffect, useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function getCurrentLocation() {
    if (!navigator.geolocation) {
      setError("Hay un error");
      return;
    } else {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
          setError(null);
          setLoading(false);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        }
      );
    }
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  function restartLocation() {
    setLocation({ latitude: 0, longitude: 0 });
  }

  return { location, restartLocation, getCurrentLocation, error, loading };
}
