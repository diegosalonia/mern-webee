import React, { useState, useEffect } from "react";
import SensorEventsItem from "./SensorEventsItem";
import { getSensorsEvent } from "./SensorEventsService";

const SensorEvents = () => {
  const [sensorsEvents, setSensorsEvents] = useState([]);

  const loadSensorEvents = async () => {
    const resp = await getSensorsEvent();
    const { data } = resp.data;
    setSensorsEvents(data);
  };

  const { data } = sensorsEvents;
  let dat = data,
    datas = [],
    values = [],
    i = 0;
  for (datas[i++] in dat) {
    let lastItem = datas.length - 1;
    values.push(dat[datas[lastItem]]);
  }

  useEffect(() => {
    loadSensorEvents();
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <div className="row align-items-start">
        <div className="row d-flex">
          <br />
          {values.map((sensorEvents) => {
            
            return <SensorEventsItem sensorEvents={sensorEvents} key={sensorsEvents._id} loadSensorEvents={loadSensorEvents}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SensorEvents;
