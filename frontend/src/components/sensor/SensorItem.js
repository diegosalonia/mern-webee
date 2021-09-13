import React from "react";
import { useHistory } from "react-router";
import { deleteSensor } from "./SensorService";
import "./SensorItem.css";

const SensorItem = ({ sensor, loadSensor }) => {
  const history = useHistory();
  const { _id, name, maxval, minval, address, active } = sensor;
  const { coordinates, formattedAddress } = sensor.location;
  let coord = coordinates,
    lonLat = [],
    values = [],
    i = 0;
  for (lonLat[i++] in coord) {
    let lastItem = lonLat.length - 1;
    values.push(coord[lonLat[lastItem]]);
  }

  const handleDelete = async (_id) => {
    await deleteSensor(_id);
    loadSensor();
  };

  return (
    <div className="col-md-4 mt-md-3">
      <div className="card card-body sensor-card border-danger">
        <div className="d-flex justify-content-between ">
          <h2 onClick={() => history.push(`/update/${_id}`)}>{name}</h2>
          <span className="text-danger" onClick={() => _id && handleDelete(_id)}>
            X
          </span>
        </div>
        <p>{formattedAddress}</p>
        <p>{address}</p>
        <p>Longitude: {values[0]}</p>
        <p>Latitude: {values[1]}</p>
        <p>{active}</p>
        <p>MinVal: {minval}</p>
        <p>MaxVal: {maxval}</p>
      </div>
    </div>
  );
};

export default SensorItem;
