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
    <div className="row-md-4">
      {sensors.map((sensor) => {
        console.log(sensor);
        return <SensorItem sensor={sensor} key={sensor._id}/>;
      })}
    </div>
  );
};

export default Sensor;
