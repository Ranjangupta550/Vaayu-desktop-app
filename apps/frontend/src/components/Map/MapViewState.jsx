import Map, { Marker, Popup, Source, Layer } from 'react-map-gl/mapbox'; // or maplibre 
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect } from 'react';

function MapViewState({ geojson }) {
  const [view, setView] = useState({ latitude:12.97, longitude:77.59, zoom:10, pitch:30 });
  const [srcKey, setSrcKey] = useState(0);
  const [token, setToken] = useState('');

  useEffect(() => {
    setSrcKey(k => k + 1);
  }, [geojson]);

  useEffect(() => {
    async function fetchToken() {
      try {
        let token = await window.api.invoke("token");
        console.log("Token fetched:", token);
        token = toString(token);
        // if (!token) {
        //   setToken(token);
        // }
      }catch (error) {
        console.error("Error fetching token:", error);
      } 
      setToken(token);
    }
    fetchToken();
  }, []);

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoicmFuamFuLTk4MzciLCJhIjoiY200eno4ZnBoMThzZTJpc2Nia2Zma2gyNiJ9.hszQOHoScU6INliFAnReZA" // Replace with your Mapbox token
      viewState={view}
      onMoveEnd={evt => setView(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      style={{ width: '100%', height: '100%' }}

    >
    </Map>
  );
}
export default MapViewState;