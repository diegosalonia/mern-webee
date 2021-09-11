import React, { useRef, useEffect, useState } from "react";
import Link from "react-dom";
import mapboxgl from "mapbox-gl";
import "./SensorMap.css";
import { getSensors } from "../sensor/SensorService";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGllZ29zYWxvbmlhIiwiYSI6ImNrcTZzY2dyejFnZGcydm12eW5oemhvMzEifQ.1jFMrHrPaucTX_LENmmWLQ";

const SensorsMap = (sensor) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-64.190405);
  const [lat, setLat] = useState(-31.407334);
  const [zoom, setZoom] = useState(9);

 



          // features: [
          //   {
          //     type: "Feature",
          //     geometry: {
          //       type: "Point",
          //       coordinates: [lng, lat],
          //     },
          //   },
          // ],
     
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="mapsensor" />
    </div>
  );
};

export default SensorsMap;
