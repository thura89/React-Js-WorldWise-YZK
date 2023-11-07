import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position : lat = {lat} / lng = {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 35323, lng: 9484393 })}>
        On Change Location
      </button>
    </div>
  );
};

export default Map;
