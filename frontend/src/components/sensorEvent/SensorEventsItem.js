import React from "react";
import { useHistory } from "react-router";
import { deleteSensorEvent } from "./SensorEventsService";
import "./SensorEventsItem.css";

const SensorEventsItem = (sensorEvents, { loadSensor }) => {
  const history = useHistory();
  let event = sensorEvents,
    datas = [],
    values = [],
    i = 0;
  for (datas[i++] in event) {
    let lastItem = datas.length - 1;
    values.push(event[datas[lastItem]]);
  }
  const { _id, name, sensorId, value } = values[0];

  const handleDelete = async (_id) => {
    await deleteSensorEvent(_id);
    loadSensor();
  };

  return (
    <div className="col-md-4 mt-md-3">
      <div className="card card-body sensor-card border-danger">
        <div className="d-flex justify-content-between ">
          <h2 onClick={() => history.push(`/update/${_id}`)}>{name}</h2>
          <span
            className="text-danger"
            onClick={() => _id && handleDelete(_id)}
          >
            X
          </span>
        </div>
        <p>{sensorId}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default SensorEventsItem;
