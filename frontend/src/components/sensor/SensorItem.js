import React from "react";
import { useHistory, useParams } from "react-router";
import "./SensorItem.css";

const SensorItem = ({ sensor }) => {
  const history = useHistory();
  const params = useParams()
  return (
    <div className="col-md-4">
      <div
        className="card card-body sensor-card"
        onClick={() => history.push(`/update/${sensor._id}`)}
      >
        <div className="d-flex justify-content-between">
          <h1>{sensor.name}</h1>
          <span className="text-danger">X</span>
        </div>
        <p>Coordenadas: {sensor.location.coordinates}</p>
        <p>{sensor.active}</p>
        <p>MinVal: {sensor.minval}</p>
        <p>MaxVal: {sensor.maxval}</p>
      </div>
    </div>
  );
};

export default SensorItem;
