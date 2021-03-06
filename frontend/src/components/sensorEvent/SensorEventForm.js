import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { createSensorEvent, getSensor } from "../sensor/SensorService";

const SensorEventForm = () => {
  const history = useHistory();
  const params = useParams()

  const initialState = {
    name: "",
    sensorId: "",
    value: "",
  }

  const [sensor, setSensor] = useState(initialState);

  const handleInputChange = (e) => {
    setSensor({ ...sensor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSensorEvent(sensor);
    toast.success("New Sensor Event Created");
    setSensor(initialState)
  };

  
  useEffect(() => {
    const getOneSensor = async(id) => {
      const resp = await getSensor(id)
      const { name, _id } = resp.data
      console.log(resp)
      setSensor({name, sensorId: _id})
      history.push("sensorevents/list");
    }
    if(params.id) {
       getOneSensor(params.id)
    }
  }, [history, params.id])

  return (
    <div className="row">
      <Card border="info" style={{ width: "18rem" }}>
        <Card.Header>Sensor Event</Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                onChange={handleInputChange}
                value={sensor.name}
              />
            </div>
            <br />

            <div className="form-group">
              <input
                type="text"
                name="sensorId"
                placeholder="Id Sensor"
                className="form-control"
                onChange={handleInputChange}
                value={sensor.sensorId}
              />
            </div>
            <br />

            <div className="form-group">
              <textarea
                name="value"
                rows={2}
                placeholder="value"
                className="form-control"
                onChange={handleInputChange}
                value={sensor.value}
              />
            </div>
            <br />
            {
              params.id ?( 
              <button className="btn btn-danger">Update event</button>
              ):(
              <button className="btn btn-primary">create event</button>)
            }

          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SensorEventForm;
