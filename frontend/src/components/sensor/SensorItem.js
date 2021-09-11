import React from "react";
import { useHistory } from "react-router";
import "./SensorItem.css";

const SensorItem = ({ sensor }) => {
  const history = useHistory();
  const { _id, name, maxval, minval, address, active } = sensor
  const { coordinates } = sensor.location
  
  return (
    <div className="col-md-4 mt-md-3"> 
      <div
        className="card card-body sensor-card border-danger"
        onClick={() => history.push(`/update/${_id}`)}
      >
        <div className="d-flex justify-content-between ">
          <h2>{name}</h2>
          <span className="text-danger">X</span>
        </div>
        <p>{address}</p>
        <p>Coordenadas: {coordinates}</p>
        <p>{active}</p>
        <p>MinVal: {minval}</p>
        <p>MaxVal: {maxval}</p>
      </div>
    </div>
  );
};

export default SensorItem;
