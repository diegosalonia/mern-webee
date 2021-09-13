import React, { useState, useEffect } from "react";
import SensorItem from "./SensorItem";
import { getSensors } from "./SensorService";

const Sensor = () => {
  const [sensors, setSensors] = useState([]);

  const loadSensor = async () => {
    const resp = await getSensors();
    setSensors(resp.data);
  };

  useEffect(() => {
    loadSensor();
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row align-items-start">
        <div className="row d-flex">
          <br />
          {sensors.map((sensor) => {
            return <SensorItem sensor={sensor} key={sensor._id} loadSensor={loadSensor}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sensor;
