
import Map, {
  Marker,
  Popup,
  Source,
  Layer,
  NavigationControl,
} from "react-map-gl/mapbox"; // or maplibre
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect, useRef, use } from "react";
import { useMapStore } from "@store"; // Adjust the import path as necessary
import {MapTheme} from "@components"; // Adjust the import path as necessary

function MapViewState({ geojson }) {
  const maprefrence = useRef(null);
  const setMapRef = useMapStore((state) => state.setMapRef);
  const mapStyle = useMapStore((state) => state.mapStyle);

  
  const mapref = useMapStore((state) => state.mapRef);
  // console.log(maprefrence.current, "maprefrence.current");

  useEffect(()=>{
    const handleResize = () => {
      if (mapref.current) {
        mapref.current.getMap().resize();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  })


  const [view, setView] = useState({
    latitude: 12.97,
    longitude: 77.59,
    zoom: 10,
    pitch: 0,
    bearing:0,
  });


  return (
    <Map
      ref={maprefrence}
      mapboxAccessToken="pk.eyJ1IjoicmFuamFuLTk4MzciLCJhIjoiY200eno4ZnBoMThzZTJpc2Nia2Zma2gyNiJ9.hszQOHoScU6INliFAnReZA" // Replace with your Mapbox token
      initialViewState={view}
      antialias={true}
      onLoad={(e) => {
        const map = e.target;
        // console.log("Map loaded", map);
        setMapRef(map); // Store the map reference in the Zustand store
      }}
      mapStyle={mapStyle} // Use the map style from the Zustand store
      style={{ width: "100%", height: "100%" }}
      terrain={{
        source: "mapbox-dem",
        exaggeration: 1.5,
      }}
      minZoom={5}
      maxZoom={20}
      maxPitch={65}
      showCompass={true}
      
      onClick={(e) => {
        // console.log("Map clicked", e);
      }}
    > 
      <NavigationControl position="top-right" />
      <MapTheme />
    </Map>
  );
}
export default MapViewState;
