import axios from "axios";

const api = "http://localhost:3000/api";

export const createSensor = async (sensor) => {
  return await axios.post(`${api}/sensor`, sensor);
};

export const getSensors = async () => {
  return await axios.get(`${api}/sensor`);
};

export const getSensor = async (_id) => {
return await axios.get(`${api}/sensor/${_id}`);
};

export const updateSensor = async (id, sensor) => {
return await axios.put(`${api}/sensor/${id}`, sensor);
};

export const deleteSensor = async (id) => {
return await axios.delete(`${api}/sensor/${id}`);
};

export const createSensorEvent = async (sensor) => {
  return await axios.post(`${api}/sensorevent`, sensor);
};

