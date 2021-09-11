import React, { useEffect, useState } from "react";
import { Card, FloatingLabel, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { createSensor, getSensor } from "./SensorService";

const SensorCreatorForm = () => {
  const history = useHistory();
  const params = useParams();

  const initialState = {
    _id: {},
    name: "",
    address:"",
    location: "",
    minval: "",
    maxval: "",
  };

  const [sensor, setSensor] = useState(initialState);

  const handleInputChange = (e) => {
    setSensor({ ...sensor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await createSensor(sensor);
    console.log(resp)
    toast.success("New Sensor Created");
    setSensor(initialState);
    history.push("/");
  };

  const getOneSensor = async (id) => {
    const resp = await getSensor(id);
    const { name, formattedAddress, address, minval, maxval } = resp.data;
    console.log(resp);
    setSensor({ name, formattedAddress, address, minval, maxval });
  };

  useEffect(() => {
    if (params.id) {
      getOneSensor(params.id);
    }
  }, [params.id]);

  return (
    <div className="row">
      <Card border="info" style={{ width: "18rem" }}>
        <Card.Header>Create Sensor</Card.Header>
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
                name="address"
                placeholder="Address"
                className="form-control"
                onChange={handleInputChange}
                value={sensor.address || sensor.formattedAddress}
              />
            </div>
            <br />

            {/* <div className="form-group">
              <FloatingLabel
                controlId="floatingInput"
                label="Address"
                className="mb-3"
              >
                <Form.Control 
                type="text"
                name="address" 
                placeholder="address" 
                value={sensor.address}
                />
              </FloatingLabel>
            </div>
            <br /> */}

            <div className="form-group">
              <input
                type="number"
                name="minval"
                placeholder="Min Val"
                className="form-control"
                onChange={handleInputChange}
                value={sensor.minval}
              />
            </div>
            <br />

            <div className="form-group">
              <input
                type="number"
                name="maxval"
                placeholder="Max Val"
                className="form-control"
                onChange={handleInputChange}
                value={sensor.maxval}
              />
            </div>
            <br />

            {params.id ? (
              <button className="btn btn-danger">Update Sensor</button>
            ) : (
              <button className="btn btn-primary">Create Sensor</button>
            )}
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SensorCreatorForm;
