import "./App.css";
import { useCurrentLocation } from "./useCurrentLocation";

function App() {
  const { location, getCurrentLocation, restartLocation, error, loading } =
    useCurrentLocation();
  return (
    <>
      <div>
        {loading && <p>Cargando ubicación...</p>}
        {error && <p>Error: {error}</p>}
        <button onClick={getCurrentLocation}>Obtener ubicación actual</button>
        <button onClick={restartLocation}>Reiniciar Ubicación</button>
        {location && (
          <p>
            Latitud: {location.latitude}, Longitud: {location.longitude}
          </p>
        )}
      </div>
    </>
  );
}

export default App;
